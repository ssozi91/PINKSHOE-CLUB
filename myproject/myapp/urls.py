from django.urls import path

from . import views

urlpatterns = [
    path('hello', views.hello, name='hello'),
    path('words.json', views.words, name='words'),
    path('result_url.json', views.result_url, name='result_url'),
    path('profile', views.result_url),
    # path('myapp/profile/<data>/', views.index, name='index'),
]
