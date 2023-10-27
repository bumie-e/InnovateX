from langchain.chains import RetrievalQA
from langchain.llms import AzureOpenAI
import requests
import openai
import pandas as pd
import os
from ast import literal_eval
from supabase.client import Client, create_client
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import SupabaseVectorStore

# Config
os.environ["SUPABASE_URL"] = "https://hryzlnqorkzfkdrkpgbl.supabase.co"
os.environ["SUPABASE_SERVICE_KEY"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeXpsbnFvcmt6ZmtkcmtwZ2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODE2OTUsImV4cCI6MjAxMzY1NzY5NX0.8RZpyVaq3vmnwWLBMgDo7mt7FW0KWgn4_SQ1FjsK60c"
os.environ["SUPABASE_SECRET_KEY"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeXpsbnFvcmt6ZmtkcmtwZ2JsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODA4MTY5NSwiZXhwIjoyMDEzNjU3Njk1fQ._9gWycCMTsBbSDB5_SFPqveOtji1bb5dTFfLMGNS778"
os.environ["OPENAI_API_KEY"] = "10176c45db5a431e979747e64bdfaf76"
openai.api_base = "https://lang-chain.openai.azure.com/"
openai.api_key = "10176c45db5a431e979747e64bdfaf76"
openai.api_type = "azure"
openai.api_version = "2023-05-15"


supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_SERVICE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

os.environ["OPENAI_API_VERSION"]= "2023-05-15"

llm = AzureOpenAI(temperature=0.0,model_name="gpt-35-turbo-instruct",
    deployment_name="lang-chain",)

embeddings = OpenAIEmbeddings(deployment="chaining",
    openai_api_base="https://lang-chain.openai.azure.com/",
    openai_api_type="azure",)



# Supabase Request 
headers = {
    'apikey': os.environ["SUPABASE_SERVICE_KEY"],
    'Authorization': f'Bearer {os.environ["SUPABASE_SERVICE_KEY"]}'
}

def courseoutline(qa):
    return qa.run('What are the main chapters or sections in this book? Give the response as a list ')

def subtopics(chapter_name, qa):
    return qa.run(f'What are the subtopics covered in {chapter_name}?  Give the response as a list ')

def indepth_subtopics(subtopicname, chapter_name, qa):
    return qa.run(f'Give an in-depth overview of the chapter {subtopicname} in the {chapter_name} chapter ')

def getcourseinfo(course_code):
    result = {}

    url = 'https://hryzlnqorkzfkdrkpgbl.supabase.co/rest/v1/data?select=*'
    response = requests.get(url, headers=headers)
    data = response.json()
    df = pd.DataFrame(data)
    df = df[df['course_code'] == course_code].reset_index(drop=True)
    
    for i in range(len(df)):
        sub_topics = df['sub_topics'][i]
        sub_topics = literal_eval(sub_topics)[1:]
        chapter = df['chapters'][i]

        result['subtopics'] = sub_topics
        result['chapters'] = chapter
    return result


def getcourse(course_code, page_number):
    result = {}
    url = 'https://hryzlnqorkzfkdrkpgbl.supabase.co/rest/v1/data?select=*'
    response = requests.get(url, headers=headers)
    data = response.json()
    df = pd.DataFrame(data)
    df = df[df['course_code'] == course_code].reset_index(drop=True)
    
    sub_topics = df['sub_topics'].iloc[page_number]
    sub_topics = literal_eval(sub_topics)[1:]
    chapter = df['chapters'].iloc[page_number]
    print(len(sub_topics))
    
    vector_store = SupabaseVectorStore(client=supabase, embedding=embeddings, table_name=f"{course_code}documents".lower(), query_name=f"{course_code}match_documents".lower())
    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=vector_store.as_retriever())

    for sub_topic in sub_topics:
        indepth_response = indepth_subtopics(sub_topic, chapter, qa)
        result[sub_topic] = {'indepth_response': indepth_response}

    return result

def get_course_quiz(course_code):
    result = {'questions': {}}

    vector_store = SupabaseVectorStore(client=supabase, embedding=embeddings, table_name=f"quiz{course_code}documents".lower(), query_name=f"quiz{course_code}match_documents".lower(),)

    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=vector_store.as_retriever())

    data = qa.run(f'List 5 questions and the options from this book')
    responses = data.split('\n')

    for i in range(1, len(responses), 6):
        question = responses[i]
        options = responses[i+1: i+5]
        result['questions'][question] = {'options':options}

        vector_store = SupabaseVectorStore(client=supabase, embedding=embeddings, table_name=f"{course_code}documents".lower(), query_name=f"{course_code}match_documents".lower(),)
        answer_qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=vector_store.as_retriever())

        # ans = qa.run(f'Which of a,b,c,or d is the correct answer {str(responses[i: i+5])}?')
        # result['questions'][question] = {'answer':ans}
        # Formulate the question for the answer retrieval
        option_str = ', '.join(options)
        ans_query = f'Which of {option_str} is the correct answer for the question: "{question}"?'
        ans = answer_qa.run(ans_query)
        
        # Update the question's data with the answer
        result['questions'][question]['answer'] = ans

    return result

def get_question_response(prompt, course_code):
    vector_store = SupabaseVectorStore(client=supabase, embedding=embeddings, table_name=f"{course_code}documents".lower(), query_name=f"{course_code}match_documents".lower(),)

    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=vector_store.as_retriever())

    data = qa.run(prompt)

    return data