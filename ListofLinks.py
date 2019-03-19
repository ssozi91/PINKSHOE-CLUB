#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Mar  7 13:00:10 2019

@author: TheDoctor
"""
#from urllib.request import urlopen,urlparse, Request,HTTPError
import sys
import requests
import pandas as pd


try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found")

# to search
query = "women cirlces"
url=[]
for j in search(query, tld="co.uk", num=1, stop=30, pause=1):
    url.append(j)

    df = pd.DataFrame(url,columns=['List'])
    # df.to_csv("url_"+query, sep='\t', encoding='utf-8')
    df.to_json('temp.json',orient='records')
