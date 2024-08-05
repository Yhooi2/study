from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static

from Humans.views import index

urlpatterns = [
    path('', index, name='index'),
]
