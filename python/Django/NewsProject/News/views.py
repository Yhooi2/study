from django.shortcuts import render
from .models import News

def index(request):
    news = News.objects.all()
    context = { 'news': news, 'title': 'News List' }
    return render(request, 'index.html', context = context)
# Create your views here.
