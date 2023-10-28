import openai
#import secrets_beta
# import requests, uuid
from translate import translate_lang
from decouple import config

# Set org ID and API key

openai.api_type = "azure"


openai.api_base = f"{config('CHAT_OPEN_AI_AZURE_URL')}"
openai.api_version = "2023-05-15"
openai.api_key = f"{config('CHAT_OPEN_AI_AZURE_KEY')}"

lang_key = config('LANG_API_KEY')
lang_endpoint = config('LANG_ENDPOINT')
lang_location = config('LANG_LOCATION')

# Map model names to OpenAI model IDs
deployment_name = f"{config('CHAT_OPEN_AI_MODEL_NAME')}"
model_name = ''

# Set up the header information, which includes our subscription key
# headers = {
#     'Ocp-Apim-Subscription-Key': lang_key,
#     'Ocp-Apim-Subscription-Region': lang_location,
#     'Content-type': 'application/json',
#     'X-ClientTraceId': str(uuid.uuid4())
# }


prompt_prefix = """You're a one of the best Senior Lecturers in the univeristy who is able to explain any concept to a student,
 that fits the students present learning and understanding abilities. 
Here is a query from a student: """

messages = [{"role": "system", "content": f"{prompt_prefix}"}]

def get_chat_response(prompt, target_language = 'English'):

    response = generate_response(prompt)

    if target_language !='English':
        response = translate_lang(target_language, response)
    print(response)

    return response



# generate a response
def generate_response(prompt):

    messages.append({"role": "user", "content": prompt})

    try:

        completion = openai.ChatCompletion.create(
            engine=deployment_name,
            messages= messages,
            max_tokens=300,
            temperature=0 
        )
        
        response = completion.choices[0]['message']['content']

    except Exception as e:
        response = 'Error'
        print('Error is ', e)

    return response
