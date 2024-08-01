from django.contrib import admin
from django.urls import path

from News.views import index

urlpatterns = [
    path('', index, name='index'),
]