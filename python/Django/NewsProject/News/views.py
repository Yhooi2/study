from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import redirect, render, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView
from .models import News, Category
from .forms import NewsForm

# def index(request):
    # news = News.objects.all()
    # categories = Category.objects.all()
    # context = { 
    #     'news': news, 
    #     'title': 'News List',
    # }
    # return render(request, 'News/index.html', context = context)
class HomeNews(ListView):
    model = News
    context_object_name = 'news'
    template_name = 'News/index.html'
    extra_context = {'title': 'Главная'}
    
    def get_context_data(self, *,  object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Главная страница'
        return context
    
    def get_queryset(self):
        return News.objects.filter(is_published=True).select_related('category')

# def get_category(request, category_id):
#     news = News.objects.filter(category_id=category_id)
#     category = Category.objects.get(pk=category_id)
#     categories = Category.objects.all()

#     context = { 
#         'news': news, 
#         'category': category
#     }
#     return render(request, 'News/category.html', context=context)

  
class NewsByCategory(ListView):
    model = News
    template_name = 'News/index.html'
    context_object_name = 'news'
    allow_empty = False
    
    def get_context_date(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = Category.objects.get(pk=self.kwargs['category_id'])
        return context
    
    def get_queryset(self):
        return News.objects.filter(category_id=self.kwargs['pk'], is_published=True).select_related('category')
    
# def view_news(request, news_id):
#     #news_item = News.objects.get(pk=news_id)
#     news_item = get_object_or_404(News, pk=news_id)
#     context = { 
#         'news_item': news_item
#     }
#     return render(request, 'News/view_news.html', context=context)
class ViewNews(DetailView):
    model = News
    context_object_name = 'news_item'

# def add_news(request):
#     if request.method == 'POST':
#         form = NewsForm(request.POST)
#         if form.is_valid(): 
#             # news = News.objects.create(**form.cleaned_data)
#             news = form.save()
#             return redirect(news)
        
#     else:
#         form = NewsForm()
#     return render(request, 'News/add_news.html', {'form': form}) 

     
class AddNews(CreateView): 
    form_class = NewsForm
    template_name = 'News/add_news.html'
    