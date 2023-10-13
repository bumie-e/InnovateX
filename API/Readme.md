# Docs for the functions in the API module

## main.py
This is the main entry point of the file. All the app routes are defined here.

## other .py files are named accordingly to the respective function
Each of the route is a POST method. Only the root is GET. I used a pydantic model to ease data transfer.

This is the class
`topic` - The topic the user wants to learn more on
`explanation_level` - The input is either "Introductory explanations" or "Advanced insights"
`prior_knowledge` - Whether the user has prior knowledge or not. The inout should either be "Little", or "Prior"
`explanation_type` - The input is either "Concise explanations",or "In-depth explorations"
`interaction_needed` - Whether the user wants an interactive quiz, "Yes" or "No"
`specific_example` - This is optional, and it is if the user wants a response tailored to a particular real life scenario

`class Item(BaseModel):
    topic: str
    explanation_level: Optional[str] = None
    prior_knowledge: Optional[str] = None
    explanation_type: Optional[str] = None
    interaction_needed: Optional[str] = None
    specific_example: Optional[str] = None
    question: Optional[str] = None`
    
I'll advise that you save these parameters as session variables so you don't have to ask the user multiple times

I'll be giving a breakdown of what each endpoint needs and the respective output

## `https://innovatexapiapp.azurewebsites.net/chat` chat.py

You are calling the `chat` function in the API which accepts an instance of item. E.g

`@app.post("/chat")
async def chat(item: Item):
return response`

This endpoint accepts the following parameters
`topic, explanation_level, prior_knowledge, explanation_type, interaction_needed`, and `specific_example` is optional

The prompt is constructed in the API and these input parameters are gotten from the evaluation page.

It's output is a json file, containing one attribute
`{"message": f"{response}"}`. `response` is a body of text with a current max of 300 tokens. This is the explation of the topic from the AI model. (We will increase it as this is only for test)

## `https://innovatexapiapp.azurewebsites.net/quiz` quiz.py

You are calling the `quiz` function in the API which accepts an instance of item. E.g

`@app.post("/quiz")
async def quiz(item: Item):
func(item.topic)
return response`

This endpoint accepts only `topic` as it's parameter

The prompt is constructed in the API and the input parameter is gotten from the evaluation page and should be sent for every request.

It's output is a json file, containing one attribute
`{"message": f"{response}"}`. `response` is a json of 5 elements, representing 5 quiz questions. This is the generated based on the topic from the AI model.


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
