"""
python_arXiv_parsing_example.py

This sample script illustrates a basic arXiv api call
followed by parsing of the results using the 
feedparser python module.

Please see the documentation at 
http://export.arxiv.org/api_help/docs/user-manual.html
for more information, or email the arXiv api 
mailing list at arxiv-api@googlegroups.com.

urllib is included in the standard python library.
feedparser can be downloaded from http://feedparser.org/ .

Author: Julius B. Lucks

This is free software.  Feel free to do what you want
with it, but please play nice with the arXiv API!
"""

import feedparser
import urllib.request as libreq

# Base api query url
base_url = 'http://export.arxiv.org/api/query?';

def query_API(query_request):
    query_request = query_request.split(' ')
    query_request = '+'.join(query_request)

    # Search parameters
    search_query = f'all:{query_request}' # search for electron in all fields
    start = 0                     # retreive the first 5 results
    max_results = 3

    query = 'search_query=%s&start=%i&max_results=%i&sortBy=lastUpdatedDate&sortOrder=ascending' % (search_query,
                                                        start,
                                                        max_results)


    # perform a GET request using the base_url and query
    response = libreq.urlopen(base_url+query).read()

    # parse the response using feedparser
    feed = feedparser.parse(response)

    # Run through each entry, and print out information
    for entry in feed.entries:
        datePublished = entry.published
        pTitle = entry.title
    
        # feedparser v5.0.1 correctly handles multiple authors, print them all
        try:
            authors = ', '.join(author.name for author in entry.authors)
        except AttributeError:
            pass

        # get the links to the abs page and pdf for this e-print
        for link in entry.links:
            if link.rel == 'alternate':
                absPageLink = link.href
            elif link.title == 'pdf':
                pdfLink = link.href
        
        # The abstract is in the <summary> element
        abstract = entry.summary

    return datePublished, pTitle, authors, absPageLink, pdfLink, abstract