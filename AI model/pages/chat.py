import streamlit as st
import openai
# from langchain.llms import AzureOpenAI
# from langchain.agents import load_tools
# from langchain.agents import initialize_agent
from streamlit_chat import message
import requests, uuid
from quiz import get_quiz_from_topic
import json
from decouple import config


# Setting page title and header
st.set_page_config(page_title="InnovateX", page_icon=":robot_face:")
st.markdown("<h1 style='text-align: center;'>DOC-AI - ask your medical questions </h1>", unsafe_allow_html=True)

st.write('Supports multiple langugages')

target_language = st.radio(
    "Select your preferred Langugage",
    ["English", "French :flag-fr:", "Italian :flag-it:", "Japanse :flag-jp:", "Russia :ru:", "Spanish :flag-es:" ],
    )

if target_language == 'English':
        target_language = 'en'
elif target_language == 'French :flag-fr:':
    target_language = 'fr'
elif target_language == 'Italian :flag-it:':
    target_language = 'it'
elif target_language == 'Japanese :flag-jp:':
    target_language = 'ja'
elif target_language == 'Russian :ru:':
    target_language = 'ru'
elif target_language == 'Korean :flag-es:':
    target_language = 'ko'
elif target_language == 'Spanish :flag-es:':
    target_language = 'es'

# Set org ID and API key

openai.api_type = "azure"
openai.api_base = config("AZURE_OPENAI_ENDPOINT") 
openai.api_version = "2023-05-15"
openai.api_key = config("AZURE_OPENAI_KEY")
lang_key = config('LANG_API_KEY')
lang_endpoint = config('LANG_ENDPOINT')
lang_location = config('LANG_LOCATION')

# Map model names to OpenAI model IDs
deployment_name = "innovatex2"
model_name = 'gpt-35-turbo-16k'

# Indicate that we want to translate and the API version (3.0) and the target language
path = '/translate?api-version=3.0'
# Add the target language parameter
target_language_parameter = '&to=' + target_language
# Create the full URL
constructed_url = lang_endpoint + path + target_language_parameter

prompt = st.session_state['prompt']
prompt_prefix = """You're a one of the best Senior Lecturers in the univeristy who is able to explain any concept to a student,
 that fits the students present learning and understanding abilities. 
Here is a query from a student: """

# Set up the header information, which includes our subscription key
headers = {
    'Ocp-Apim-Subscription-Key': lang_key,
    'Ocp-Apim-Subscription-Region': lang_location,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}

# Initialise session state variables
if 'generated' not in st.session_state:
    st.session_state['generated'] = []
if 'past' not in st.session_state:
    st.session_state['past'] = []
if 'messages' not in st.session_state:
    st.session_state['messages'] = [
        {"role": "system", "content": f"{prompt_prefix}"}
    ]
if 'model_name' not in st.session_state:
    st.session_state['model_name'] = []
# if 'cost' not in st.session_state:
#     st.session_state['cost'] = []
# if 'total_tokens' not in st.session_state:
#     st.session_state['total_tokens'] = []
# if 'total_cost' not in st.session_state:
#     st.session_state['total_cost'] = 0.0

# Sidebar - let user choose model, show total cost of current conversation, and let user clear the current conversation
st.sidebar.title("Sidebar")
#model_name = st.sidebar.radio("Choose a model:", ("GPT-3.5", "GPT-4"))
# counter_placeholder = st.sidebar.empty()
# counter_placeholder.write(f"Total cost of this conversation: ${st.session_state['total_cost']:.5f}")
clear_button = st.sidebar.button("Clear Conversation", key="clear")
st.sidebar.markdown('<h2>Suggestios</h2>', unsafe_allow_html=True)
st.sidebar.write('These resources have been highlighted as useful resource to help you understand the material better.')
st.sidebar.write('Podcasts')
st.sidebar.write('Research Papers')




# Suggestion model
# llm = AzureOpenAI(
#           deployment_name=deployment_name,
#           model_name=model_name, # default model
#           temperature=0)

# reset everything
if clear_button:
    st.session_state['generated'] = []
    st.session_state['past'] = []
    st.session_state['messages'] = [
        {"role": "system", "content": f"{prompt_prefix}"}
    ]
    # st.session_state['number_tokens'] = []
    st.session_state['model_name'] = []
    # st.session_state['cost'] = []
    # st.session_state['total_cost'] = 0.0
    # st.session_state['total_tokens'] = []
    # counter_placeholder.write(f"Total cost of this conversation: ${st.session_state['total_cost']:.5f}")





# generate a response
def generate_response(prompt):
    st.session_state['messages'].append({"role": "user", "content": prompt})
    #response = ''
    print(st.session_state['messages'])

    try:
        print(prompt_prefix)
        completion = openai.ChatCompletion.create(
            engine=model_name,
            messages= st.session_state['messages'], # + prompt,
            max_tokens=300,
            temperature=0 #st.session_state['messages']
        )
        
        response = completion.choices[0]['message']['content']
        print(response)
        
        if target_language !='en':
            response = translate(response)
            
        
        st.session_state['messages'].append({"role": "assistant", "content": response})

    except Exception as e:
        response = 'Error'
        print('Error is ', e)
        st.session_state['messages'].append({"role": "assistant", "content": response})

    # print(st.session_state['messages'])
    # total_tokens = completion.usage.total_tokens
    # prompt_tokens = completion.usage.prompt_tokens
    # completion_tokens = completion.usage.completion_tokens
    return response#, total_tokens, prompt_tokens, completion_tokens

def translate(text):
    # Translation
    body = [{ 'text': text }]
    # Make the call using post
    translator_request = requests.post(constructed_url, headers=headers, json=body)
    # Retrieve the JSON response
    translator_response = translator_request.json()
    # Retrieve the translation
    translated_text = translator_response[0]['translations'][0]['text']
    return translated_text

# def generate_suggestions():
#     llm
    
st.markdown(f"""<h2> {st.session_state['topic']} </h2> 
                <p>{generate_response(prompt)}</p>""", unsafe_allow_html=True)
    
st.markdown('<h3> Questions? </h3>', unsafe_allow_html=True)

# container for chat history
response_container = st.container()
# container for text box
container = st.container()



with container:

    with st.form(key='my_form', clear_on_submit=True):
        user_input = st.text_area("You:", key='input', height=100)
        submit_button = st.form_submit_button(label='Send')

    if submit_button and user_input:
        output = generate_response(user_input)
        st.session_state['past'].append(user_input)
        st.session_state['generated'].append(output)
        st.session_state['model_name'].append(model_name)
        # st.session_state['total_tokens'].append(total_tokens)

        # from https://openai.com/pricing#language-models
        # cost = (prompt_tokens * 0.03 + completion_tokens * 0.06) / 1000

        # st.session_state['cost'].append(cost)
        # st.session_state['total_cost'] += cost

if st.session_state['generated']:
    with response_container:
        for i in range(len(st.session_state['generated'])):
            message(st.session_state["past"][i], is_user=True, key=str(i) + '_user')
            message(st.session_state["generated"][i], key=str(i))
            # st.write(
            #     f"Model used: {st.session_state['model_name'][i]}; Number of tokens: {st.session_state['total_tokens'][i]}; Cost: ${st.session_state['cost'][i]:.5f}")
            # counter_placeholder.write(f"Total cost of this conversation: ${st.session_state['total_cost']:.5f}")



###########################################
# Quiz bot
# Input box to enter the topic of the quiz
st.markdown('<h2> Quiz </h2>', unsafe_allow_html=True)
if st.button('Start Quiz'): 

    topic = st.sidebar.text_input(
        "To change topic just enter in below. From next new quiz question the topic entered here will be used.",
        value="devops",
    )

    # Define a function to display the current question and options
    def display_question():
        # Handle first case
        if len(st.session_state.questions) == 0:
            try:
                first_question = get_quiz_from_topic(topic)
            except openai.error.AuthenticationError:
                st.error(
                    "Please enter a valid OpenAI API key in the left sidebar to proceed. "
                    "To know how to obtain the key checkout readme for this project here: https://github.com/Dibakarroy1997/QuizWhizAI/blob/main/README.md"
                )
                return
            st.session_state.questions.append(first_question)

        # Disable the submit button if the user has already answered this question
        submit_button_disabled = st.session_state.current_question in st.session_state.answers

        # Get the current question from the questions list
        question = st.session_state.questions[st.session_state.current_question]

        # Display the question prompt
        st.write(f"{st.session_state.current_question + 1}. {question['question']}")

        # Use an empty placeholder to display the radio button options
        options = st.empty()

        # Display the radio button options and wait for the user to select an answer
        user_answer = options.radio("Your answer:", question["options"], key=st.session_state.current_question)

        # Display the submit button and disable it if necessary
        submit_button = st.button("Submit", disabled=submit_button_disabled)

        # If the user has already answered this question, display their previous answer
        if st.session_state.current_question in st.session_state.answers:
            index = st.session_state.answers[st.session_state.current_question]
            options.radio(
                "Your answer:",
                question["options"],
                key=float(st.session_state.current_question),
                index=index,
            )

        # If the user clicks the submit button, check their answer and show the explanation
        if submit_button:
            # Record the user's answer in the session state
            st.session_state.answers[st.session_state.current_question] = question["options"].index(user_answer)

            # Check if the user's answer is correct and update the score
            if user_answer == question["answer"]:
                st.write("Correct!")
                st.session_state.right_answers += 1
            else:
                st.write(f"Sorry, the correct answer was {question['answer']}.")
                st.session_state.wrong_answers += 1

            # Show an expander with the explanation of the correct answer
            with st.expander("Explanation"):
                st.write(question["explanation"])

        # Display the current score
        st.write(f"Right answers: {st.session_state.right_answers}")
        st.write(f"Wrong answers: {st.session_state.wrong_answers}")


    # Define a function to go to the next question
    def next_question():
        # Move to the next question in the questions list
        st.session_state.current_question += 1

        # If we've reached the end of the questions list, get a new question
        if st.session_state.current_question > len(st.session_state.questions) - 1:
            try:
                next_question = get_quiz_from_topic(topic)
            except openai.error.AuthenticationError:
                st.session_state.current_question -= 1
                return
            st.session_state.questions.append(next_question)


    # Define a function to go to the previous question
    def prev_question():
        # Move to the previous question in the questions list
        if st.session_state.current_question > 0:
            st.session_state.current_question -= 1
            st.session_state.explanation = None


    # Create a 3-column layout for the Prev/Next buttons and the question display
    col1, col2, col3 = st.columns([1, 6, 1])

    # Add a Prev button to the left column that goes to the previous question
    with col1:
        if col1.button("Prev"):
            prev_question()

    # Add a Next button to the right column that goes to the next question
    with col3:
        if col3.button("Next"):
            next_question()

    # Display the actual quiz question
    with col2:
        display_question()

    # Add download buttons to sidebar which download current questions
    download_button = st.sidebar.download_button(
        "Download Quiz Data",
        data=json.dumps(st.session_state.questions, indent=4),
        file_name="quiz_session.json",
        mime="application/json",
    )

    # message_history = []

    # for message_ in message_history:
    #         message(message_)   # display all the previous message

    # placeholder = st.empty()  # placeholder for latest message
    # input_ = st.text_input("you:")
    # message_history.append(input_)

    # with placeholder.container():
    #     message(message_history[-1]) # display the latest message