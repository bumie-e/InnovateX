import openai
#import secrets_beta
import requests, uuid
from decouple import config

# Set org ID and API key

openai.api_type = "azure"
openai.api_base = config("AZURE_OPENAI_ENDPOINT") 
openai.api_version = "2023-05-15"
openai.api_key = config("AZURE_OPENAI_KEY")
lang_key = config('LANG_API_KEY')
lang_endpoint = config('LANG_ENDPOINT')
lang_location = config('LANG_LOCATION')

# Map model names to OpenAI model IDs
deployment_name = "chatlang"
model_name = ''

# Set up the header information, which includes our subscription key
headers = {
    'Ocp-Apim-Subscription-Key': lang_key,
    'Ocp-Apim-Subscription-Region': lang_location,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}


prompt_prefix = """You're a one of the best Senior Lecturers in the univeristy who is able to explain any concept to a student,
 that fits the students present learning and understanding abilities. 
Here is a query from a student: """

messages = [{"role": "system", "content": f"{prompt_prefix}"}]

def get_chat_response(prompt, target_language = 'English'):

    # Setting target language
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

    # Indicate that we want to translate and the API version (3.0) and the target language
    path = '/translate?api-version=3.0'
    # Add the target language parameter
    target_language_parameter = '&to=' + target_language
    # Create the full URL
    constructed_url = lang_endpoint + path + target_language_parameter

    response = generate_response(prompt_prefix, prompt)

    if target_language !='en':
        response = translate(constructed_url, response)

    return response



# generate a response
def generate_response(prompt_prefix, prompt):

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

def translate(constructed_url, text):
    # Translation
    body = [{ 'text': text }]
    # Make the call using post
    translator_request = requests.post(constructed_url, headers=headers, json=body)
    # Retrieve the JSON response
    translator_response = translator_request.json()
    # Retrieve the translation
    translated_text = translator_response[0]['translations'][0]['text']
    return translated_text


