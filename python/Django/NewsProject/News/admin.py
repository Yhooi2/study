from django.contrib import admin
from .models import News

class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'is_published', 'created_at', 'photo', 'author')
    list_display_links = ('id', 'title')
    search_fields = ['title', 'content']

admin.site.register(News, NewsAdmin)

# Register your models here.
