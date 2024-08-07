from django.shortcuts import render, get_object_or_404
from .models import News, Category

def index(request):
    news = News.objects.all()
    categories = Category.objects.all()
    context = { 
        'news': news, 
        'title': 'News List',
    }
    return render(request, 'News/index.html', context = context)

def get_category(request, category_id):
    news = News.objects.filter(category_id=category_id)
    category = Category.objects.get(pk=category_id)
    categories = Category.objects.all()

    context = { 
        'news': news, 
        'category': category
    }
    return render(request, 'News/category.html', context=context)

    
def view_news(request, news_id):
    #news_item = News.objects.get(pk=news_id)
    news_item = get_object_or_404(News, pk=news_id)
    context = { 
        'news_item': news_item
    }
    return render(request, 'News/view_news.html', context=context)