from News.models import Category
from django import template
from django.db.models import Count
register = template.Library()

@register.simple_tag(name='get_list_categories')
def get_categories():
    categories = Category.objects.all()
    return categories

@register.inclusion_tag('News/list_categories.html')
def show_categories(arg1='Category', arg2='list'):
    # categories = Category.objects.all()
    categories = Category.objects.annotate(cnt=Count('news')).filter(cnt__gt=0)
    return { 'arg1': arg1, 'arg2': arg2, 'categories': categories }