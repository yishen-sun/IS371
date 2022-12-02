import requests
import json

def getmetadata(url, title):
    p = {"Title":title}
    r = requests.get(url, params=p)
    total_pages = json.loads(r.text).get("total_pages")
    # print(total_pages)
    return total_pages
def getdata(url, title, total_pages):
    titles = []
    for i in range(total_pages):
        p = {"Title":title, "page":i + 1}
        r = requests.get(url, params=p)
        data = json.loads(r.text).get("data")
        for row in data:
            titles.append(row["Title"])
    titles.sort()
    return titles

if(__name__=="__main__"):
    url = "https://jsonmock.hackerrank.com/api/movies/search/"
    title = "spiderman"
    total_pages = getmetadata(url, title)
    titles = getdata(url, title, total_pages)
    for name in titles:
        print(name)
