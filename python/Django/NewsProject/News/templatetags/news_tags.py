from News.models import Category
from django import template

register = template.Library()

@register.simple_tag(name='get_list_categories')
def get_categories():
    categories = Category.objects.all()
    return categories

@register.inclusion_tag('news/list_categories.html')
def show_categories(arg1='Category', arg2='list'):
    categories = Category.objects.all()
    return { 'arg1': arg1, 'arg2': arg2, 'categories': categories }