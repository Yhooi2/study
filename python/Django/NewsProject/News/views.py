from django.contrib import messages
from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import redirect, render, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView
from .utils import MyMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django.contrib.auth.forms import UserCreationForm

from .models import News, Category
from .forms import NewsForm


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Вы успешно зарегистрированы!')
            return redirect('Login')
        else:
            messages.error(request, 'Ошибка регистрации!')
    else:
        form = UserCreationForm()
    return render(request, 'News/register.html', {'form': form})

def login(request):
    return render(request, 'News/login.html')

# def test(request):
#     objects = ['john', 'doe', 'rick', 'jane', 'bill', 'sara', 'emma', 'sarah']
#     paginator = Paginator(objects, 2)
#     page_num = request.GET.get('page', 1)
#     page_objects = paginator.get_page(page_num)
#     return render(request, 'News/test.html', {'page_obj': page_objects})


# def index(request):
    # news = News.objects.all()
    # categories = Category.objects.all()
    # context = { 
    #     'news': news, 
    #     'title': 'News List',
    # }
    # return render(request, 'News/index.html', context = context)
class HomeNews(ListView, MyMixin):
    model = News
    context_object_name = 'news'
    template_name = 'News/index.html'
    extra_context = {'title': 'Главная'}
    paginate_by = 3
    
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

  
class NewsByCategory(ListView, MyMixin):
    model = News
    template_name = 'News/index.html'
    context_object_name = 'news'
    allow_empty = False
    paginate_by = 3
    
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
    login_url = '/admin/'