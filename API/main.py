# chat.py
# Import libaries
from typing import Optional
from chat import get_chat_response
from quiz import get_quiz_from_topic
from rpaper import query_API
from podcast import query_podcast_api
from translate import translate_lang
from courses import getcourse, getcourseinfo, get_course_quiz, get_question_response
from upload import upload_file
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import FastAPI, UploadFile, HTTPException, File
from fastapi.responses import JSONResponse
import shutil
from pathlib import Path
import io

class Item(BaseModel):
    language: Optional[str] = 'English'
    course_code: str
    page_number: Optional[int] = 0
    topic: Optional[str] = None
    explanation_level: Optional[str] = 'Introductory explanations'
    prior_knowledge: Optional[str] = 'Prior'
    explanation_type: Optional[str] = 'In-depth explorations'
    interaction_needed: Optional[str] = 'Yes'
    specific_example: Optional[str] = None
    question: Optional[str] = None
    text: Optional[str] = None


# Load the app
app = FastAPI()

# Define root
@app.get("/")
async def root():
    return {"message": "Hello World"}

# Define root
@app.post("/course")
async def course(item: Item):
    response = getcourse(item.course_code, item.page_number)
    return {"message": f"{response}"}

@app.post("/courseinfo")
async def courseinfo(item: Item):
    response = getcourseinfo(item.course_code)
    return {"message": f"{response}"}

@app.post("/upload_materials")
async def upload_materials(item: Item):
    response = getcourseinfo(item.course_code)
    return {"message": f"{response}"}

# Define chat
@app.post("/chat")
async def chat(item: Item):

    if item.explanation_type == "Concise explanations":
        item.explanation_type = "using simple language, avoiding technical jargon"
    if item.interaction_needed == "Yes":
        item.interaction_needed = "I prefer an interactive learning experience with opportunities for feedback"
    else:
        item.interaction_needed=''
    if item.explanation_level == 'Advanced insights':
        item.explanation_level = "I'm looking to expand my knowledge in"
    else:
        item.explanation_level = 'I need an introducton to'
    if item.specific_example !='':
        item.specific_example = f"provide practical examples or case studies related to {item.specific_example} to"

    prompt = f"""{item.explanation_level} {item.topic}, and I have {item.prior_knowledge} knowledge in this area. 
        {item.interaction_needed}. Please explain {item.topic} using {item.explanation_type}. 
        Additionally, can you {item.specific_example} make it more engaging and relevant to my interests?"""

    response = get_chat_response(prompt, item.language)
    return {"message": f"{response}"}

# Define root
@app.post("/quiz")
async def quiz(item: Item):

    response = get_course_quiz(item.course_code)
    #response = get_quiz_from_topic(item.topic)
    return {"message": f"{response}"}

# Define root
@app.post("/question")
async def questions(item: Item):
    # prompt = f'Please provide a response to the question on this {item.question}'
    # response = get_chat_response(prompt)
    prompt = f'What is the answer to this question: {item.question}?'
    response = get_question_response(prompt, item.course_code)
    return {"message": f"{response}"}

# Define podcast
@app.post("/podcast")
async def podcast(item:Item):
    response = query_podcast_api(item.topic)
    return {"message": f"{response}"}

# Define rpaper
@app.post("/rpaper")
async def rpaper(item: Item):
    response  = query_API(item.topic)
    return {"message": f"{response}"}

# Define root
@app.post("/translate")
async def translate(item: Item):
    response = translate_lang(item.language, item.text)
    return {"message": f"{response}"}

# Define root
@app.post("/video")
async def video(item: Item):

    return {"message": "Hello World"}

@app.post("/upload_materials")
async def upload_material(file: UploadFile = File(...)):
    try:
        contents = file.file.read()  # This reads the file as binary data
        with open(file.filename, 'wb') as f:
            f.write(contents)
    except Exception as e:
        return {"message": f"There was an error uploading the file: {str(e)}"}
    finally:
        file.file.close()
        
    return {"message": f"Successfully uploaded {file.filename}"}