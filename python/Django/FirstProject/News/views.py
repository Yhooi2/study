from django.shortcuts import render
from .models import News

def index(request):
    news_list = News.objects.all()
    context = {'news_list': news_list, 'title': 'Список новостей'}
    return render(request, 'index.html', context=context)