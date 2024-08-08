from django.contrib import admin
from django.urls import path
from News.views import index, get_category, view_news, add_news
from News.views import index

urlpatterns = [
    path('', index, name='Home'),
    path('category/<int:category_id>/', get_category, name='Category'),
    path('news/<int:news_id>/', view_news, name='View_news'),
    path('/add_news', add_news, name='Add_news')
]

