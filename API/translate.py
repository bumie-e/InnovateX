import requests, uuid, json
from decouple import config

# Add your key and endpoint
key = config('AZURE_LANGUAGE_KEY')
endpoint = "https://api.cognitive.microsofttranslator.com"

# location, also known as region.
# required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
location = config('AZURE_LANGUAGE_LOCATION')

path = '/translate'
constructed_url = endpoint + path
# "yo":{"name":"Yoruba","nativeName":"Èdè Yorùbá","dir":"ltr"}
# "zu":{"name":"Zulu","nativeName":"Isi-Zulu","dir":"ltr"}
# "ha":{"name":"Hausa","nativeName":"Hausa","dir":"ltr"}
# "ig":{"name":"Igbo","nativeName":"Ásụ̀sụ́ Ìgbò","dir":"ltr"}
# "sw":{"name":"Swahili","nativeName":"Kiswahili","dir":"ltr"}

def translate_lang(target_language, text):
    # Setting target language
    if target_language == 'English':
        target_language = 'en'
    elif target_language == 'Yoruba':
        target_language = 'yo'
    elif target_language == 'Zulu':
        target_language = 'zu'
    elif target_language == 'Hausa':
        target_language = 'ha'
    elif target_language == 'Russian :ru:':
        target_language = 'ru'
    elif target_language == 'Igbo':
        target_language = 'ig'
    elif target_language == 'Swahili':
        target_language = 'sw'

    params = {
        'api-version': '3.0',
        'from': 'en',
        'to': target_language #['yo', 'ig']
    }
    headers = {
        'Ocp-Apim-Subscription-Key': key,
        # location required if you're using a multi-service or regional (not global) resource.
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': str(uuid.uuid4())
    }

    # You can pass more than one object in body.
    body = [{
        'text': text
    }]
    if target_language !='en':
        try:
            request = requests.post(constructed_url, params=params, headers=headers, json=body)
            response = request.json()
            print(json.dumps(response, sort_keys=True, ensure_ascii=False, indent=4, separators=(',', ': ')))
        except Exception as e:
            print('Error is', e)
    else:
        response = text

    return response
    # print(json.dumps(response, sort_keys=True, ensure_ascii=False, indent=4, separators=(',', ': ')))