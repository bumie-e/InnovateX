# Docs for the functions in the API module

## main.py
This is the main entry point of the file. All the app routes are defined here.

## other .py files are named accordingly to the respective function
Each of the route is a POST method. Only the root is GET. I used a pydantic model to ease data transfer.

This is the class.

`language` - Language the user wants to learn with. Available languages are English, Yoruba, Hausa, Igbo, Swahili, and Zulu

`course_code` - Course code for the course. Available courses are CSC401, CSC403, CSC405, CSC407, CSC415

`page_number` - An Integer to represent the chapter or module to load. It is between 0 to the length of the total subtopic returned.

`topic` - Now redundant

`explanation_level` - The input is either "Introductory explanations" or "Advanced insights"

`prior_knowledge` - Whether the user has prior knowledge or not. The input should either be "Little", or "Prior"

`explanation_type` - The input is either "Concise explanations",or "In-depth explorations"

`interaction_needed` - Whether the user wants an interactive quiz, "Yes" or "No"

`specific_example` - This is optional, and it is if the user wants a response tailored to a particular real-life scenario

`question` - This is the question the user wants to ask. This is the place for chat.

`text` - This is the text you want to be translated to a different language. Just incase you want to switch between languages and don't want to regenerate the content.

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
    
I'll advise that you save these parameters as session variables so you don't have to ask the user multiple times

I'll be giving a breakdown of what each endpoint needs and the respective output

## Course Information

`https://innovatexapiapp.azurewebsites.net/courseinfo` course.py

You are calling the `courseinfo` function in the API which accepts an instance of item. E.g

    @app.post("/courseinfo")
    async def courseinfo(item: Item):
        response = getcourseinfo(item.course_code)
        return {"message": f"{response}"}

This endpoint accepts the following parameters

`course_code`, 

and returns a json containing,

    {
    'subtopics':
    'chapters':
    }

Sample Input

    {
      "language": "English",
      "course_code": "CSC401",
      "page_number": 0,
      "topic": "string",
      "explanation_level": "string",
      "prior_knowledge": "string",
      "explanation_type": "string",
      "interaction_needed": "string",
      "specific_example": "string",
      "question": "string",
      "text": "string"
    }

Curl:

    curl -X 'POST' \
      'https://innovatex.azurewebsites.net/courseinfo' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "language": "English",
      "course_code": "CSC401",
      "page_number": 0,
      "topic": "string",
      "explanation_level": "string",
      "prior_knowledge": "string",
      "explanation_type": "string",
      "interaction_needed": "string",
      "specific_example": "string",
      "question": "string",
      "text": "string"
    }'

Sample Output

    {
      "message": 
          "{'subtopics': 
              ['1. Boolean Algebra', '2. Gates', '3. Combinational Circuits', '4. Implementation of Boolean Functions', '5. Multiplexers', '6. Decoders', '7. Read-Only-Memory', '8. Adders', '9. Sequential Circuits', '10. Flip-Flops', '11. Registers', '12. Counters', '13. Programmable Logic Devices', '14. Programmable Logic Array', '15. Field-Programmable Gate Array'], 
          'chapters': '3. Chapter 11: Digital Logic'}"
    }

## Course Content

This returns the full and in-depth content of a course. Due to the time it takes for a content to be loaded, it will only return data based on the chapter(which is identifed as a page number).

So for example, if CSC312 has 6 chapters(also known as modules), this endpoint will accept the course_code and page_number, in this instance the first chapter as 0. And it returns an output of the subtopics for that chapter and the content, which should be displayed on a single page.

    {
        'sub_topic':
        'indepth_response':
    }



Sample Input

    {
      "language": "English",
      "course_code": "CSC401",
      "page_number": 0,  ----note the page number is 0, to mean the first chapter. The next chapter will be 1
      "topic": "string",
      "explanation_level": "string",
      "prior_knowledge": "string",
      "explanation_type": "string",
      "interaction_needed": "string",
      "specific_example": "string",
      "question": "string",
      "text": "string"
    }

Sample Output





## Quiz

`https://innovatexapiapp.azurewebsites.net/quiz` --> course.py

This accepts only the `coursse_code` as the input

    @app.post("/quiz")
    async def quiz(item: Item):
        response = get_course_quiz(item.course_code)
        return {"message": f"{response}"}

It returns 5 quizes in this format

    {
        'questions':
            'options':
            'answers':
    }

Sample Input

    {
      "language": "English",
      "course_code": "CSC403",
      "page_number": 0,
      "topic": "string",
      "explanation_level": "string",
      "prior_knowledge": "string",
      "explanation_type": "string",
      "interaction_needed": "string",
      "specific_example": "string",
      "question": "string",
      "text": "string"
    }

Sample Output

    {
      "message": 
          "{'questions': 
              {'1. What is the time allowed for the exam?': 
                  {'options': ['a. 1 hour', 'b. 2 hours', 'c. 3 hours', 'd. 4 hours'], 
                  'answer': \"\\nI don't know the answer to this question as it is not related to the given context about classifying grammars.\"}, 
                '2. How many questions should be answered in total?': {'options': ['a. 2', 'b. 3', 'c. 4', 'd. 5'], 'answer': ' d. 5'}, '3. Which department is offering the course?':
                    {'options': ['a. Computer Science', 'b. Engineering', 'c. Technology', 'd. Mathematics'], 
                    'answer': ' a. Computer Science'}, 
                '4. When is the exam taking place?': 
                    {'options': ['a. August 2017', 'b. January 2022', 'c. June 2019', 'd. September 2018'], 
                    'answer': \"\\nI don't know, as the context provided does not mention an exam or any specific date.\"}, 
                '5. How many questions should be answered from each section?': 
                {'options': ['a. 1', 'b. 2', 'c. 3', 'd. 4'], 
                'answer': \"\\nI don't know.\"}}}"
    }

## `https://innovatexapiapp.azurewebsites.net/questions` questions.py

You are calling the `questions` function in the API which accepts an instance of item. E.g

`@app.post("/questions")
async def questions(item: Item):
func(item.topic, item.question)
return response`

This endpoint accepts `topic` and `question` as it's parameters. `question` here refers to the question the user has.

The prompt is constructed in the API and the input parameter is gotten from the evaluation page and should be sent for every request.

It's output is a json file, containing one attribute
`{"message": f"{response}"}`. `response` is a single element which is a response to the question.


## `https://innovatexapiapp.azurewebsites.net/podcast` podcast.py

You are calling the `podcast` function in the API which accepts an instance of item. E.g

`@app.post("/podcast")
async def podcast(item: Item):
func(item.topic)
return response`

- This endpoint accepts only `topic` as it's parameter

For now, it doesn't require a promptand uses only the input parameter.

It's output is a json file, containing one attribute
`{"message": f"{response}"}`. `response` is a json of 3 elements. They each contain the following attributes.
  `{'link_to_audio_file': link_to_audio_file, ` - Link to a downloadable file of the podcast
  `'podcast_image':podcast_image,` - An image or thumbnail as a cover for the podcast
  `'link_to_audio_on_listenotes':link_to_audio_on_listenotes,` - Link to the podcast itself on listen API
  `'podcast_title':podcast_title, 'podcast_channel_title':podcast_channel_title}` - Title of the podcast channel that produced this podcast

## `https://innovatexapiapp.azurewebsites.net/rpaper` rpaper.py

You are calling the `rpaper` function in the API which accepts an instance of item. E.g

`@app.post("/rpaper")
async def rpaper(item: Item):
func(item.topic)
return response`

- This endpoint accepts only `topic` as it's parameter

For now, it doesn't require a promptand uses only the input parameter.

It's output is a json file, containing one attribute
`{"message": f"{response}"}`. `response` is a json of 3 research paper results, each having 6 attributes. This is the generated based on the topic. 
`{'datePublished':datePublished,` - The date the research was published
`'pTitle':pTitle,` - The title of the research paper
`'authors':authors,` - The authors of the research papers
`'absPageLink':absPageLink,` - Link to the paper's abstract
`'pdfLink':pdfLink,` - Link to the paper's pdf
`'abstract':abstract}` - The paper's abstract(a short summary of the paper)

## video.py 
This is currently unavaliable as I am still working on it. 

I hope this helps
