import json
from listennotes import podcast_api
from decouple import config

listen_key = config('LISTEN_API_KEY')

client = podcast_api.Client(api_key=listen_key)

def query_podcast_api(query):
    response = client.search(
    q=query,
    sort_by_date=0,
    type='episode',
    offset=0,
    # len_min=10,
    # len_max=30,
    published_before=1580172454000,
    published_after=0,
    only_in='title,description',
    language='English',
    safe_mode=0,
    unique_podcasts=0,
    page_size=3,
    )
    response = response.json()['results']
    print(len(response))
    podcast_info = []
    for i in range(len(response)):
        link_to_audio_file = response[i]['audio']
        podcast_image = response[i]['image']
        link_to_audio_on_listenotes = response[i]['listennotes_url']
        podcast_title = response[i]['title_original']
        podcast_channel_title = response[i]['podcast']['title_original']

        podcast_info.append({'link_to_audio_file': link_to_audio_file, 'podcast_image':podcast_image, 'link_to_audio_on_listenotes':link_to_audio_on_listenotes,
                             'podcast_title':podcast_title, 'podcast_channel_title':podcast_channel_title})
    print(len(podcast_info))
    podcast_info = json.dumps(podcast_info)
    return json.loads(podcast_info)