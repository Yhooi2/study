from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    print(request)
    return HttpResponse("<h1>Hello, world. You're at the FirstProject index.</h1>")

