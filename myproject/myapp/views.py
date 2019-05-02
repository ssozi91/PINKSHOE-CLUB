from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_protect

from myapp.scraper import scrape

def hello(request):
    template = loader.get_template('myapp/hello.html')
    return HttpResponse(template.render({},request))

def words(request):
    template = loader.get_template('myapp/words.json')
    return HttpResponse(template.render({},request))

def result_url(request):
    text=str(request.body)
    scrape(text)
    template = loader.get_template('myapp/result_url.json')
    return HttpResponse(template.render({},request))
