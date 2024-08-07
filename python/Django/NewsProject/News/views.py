from django.shortcuts import render
from .models import News, Category

def index(request):
    news = News.objects.all()
    categories = Category.objects.all()
    context = { 
        'news': news, 
        'title': 'News List',
        'categories': categories,
    }
    return render(request, 'News/index.html', context = context)

def get_category(request, category_id):
    news = News.objects.filter(category_id=category_id)
    category = Category.objects.get(pk=category_id)
    categories = Category.objects.all()

    context = { 
        'news': news, 
        'categories': categories,
        'category': category,
    }
    return render(request, 'News/category.html', context = context)