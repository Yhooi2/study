from django.contrib import admin
from .models import News, Category

class NewsAdmin(admin.ModelAdmin):
    list_display = ('id','category', 'title', 'content', 'is_published', 'created_at', 'photo', 'author')
    list_display_links = ('id', 'title')
    search_fields = ['title', 'content']
    list_filter = ('is_published', 'created_at', 'author', 'category')
    list_editable = ('is_published', 'category')

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')

admin.site.register(News, NewsAdmin)
admin.site.register(Category, CategoryAdmin)

# Register your models here.
