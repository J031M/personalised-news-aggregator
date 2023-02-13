import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import random

print("Imported libraries...")

ogdf=pd.read_json('articles.json')
#ogdf=pd.DataFrame(columns=['title','category','content'])

print("Loaded previous news...")

techcrunch = "https://techcrunch.com/"
response = requests.get(techcrunch)
soup = BeautifulSoup(response.text, "html.parser")

urllinks = []

for link in soup.find_all("a", class_="post-block__title__link"):
    urllinks.append(link["href"])

catscam=["Technology","Economics","Startups","AI","ML","Business","Software"]

print("Retrieved Links...")

for url in urllinks:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    title = soup.find("h1", class_="article__title").text
    category = catscam[random.randint(0,len(catscam)-1)]
    article_content = soup.find("div", class_="article-content")
    content=""
    for p in article_content.find_all("p"):
        content=content+'\n'+p.text
    row=pd.DataFrame(columns=['title','category','content'],data=[np.array([title,category,content])])
    ogdf=ogdf.append(row)

ogdf.drop_duplicates(subset=['title'],ignore_index=True, inplace=True)

print("Updated articles...")

ogdf.to_json('articles.json')

print("Saved to disk...")
print("Scraping Complete!")