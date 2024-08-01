from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    print(request)
    return HttpResponse("<h1>Test. You're at the Blog index.</h1>")
    

# Create your views here.
