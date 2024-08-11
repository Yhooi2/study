from django.contrib import admin
from django.urls import path
from django.views.decorators.cache import cache_page

from News.views import HomeNews, NewsByCategory, ViewNews, AddNews, register, user_login, user_logout
# from News.views import index, get_category, view_news, add_news, test

urlpatterns = [
    # path('', index, name='Home'),
    # path('category/<int:category_id>/', get_category, name='Category'),
    # path('news/<int:news_id>/', view_news, name='View_news'),
    # path('news/add_news', add_news, name='Add_news')
    # path('test/', test, name='Test'),
    path('', HomeNews.as_view(), name='Home'),
    path('category/<int:pk>/', NewsByCategory.as_view(), name='Category'),
    path('news/<int:pk>/', ViewNews.as_view(), name='View_news'),
    path('news/add_news', AddNews.as_view(), name='Add_news'),
    path('register/', register, name='Register'),
    path('login/', user_login, name='Login'),
    path('logout/', user_logout, name='Logout'),
]

