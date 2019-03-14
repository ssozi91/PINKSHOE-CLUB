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
query = "Business_Women"
url=[]
for j in search(query, tld="co.uk", num=10, stop=1, pause=2): 
    url.append(j)
    
    df = pd.DataFrame(url,columns=['List'])
    df.to_csv("url_"+query, sep='\t', encoding='utf-8')
    