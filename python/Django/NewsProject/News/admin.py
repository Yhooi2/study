from django.contrib import admin
from django.utils.safestring import mark_safe
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import News, Category


class NewsAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    
    class Meta:
        model = News
        fields = '__all__'

class NewsAdmin(admin.ModelAdmin):
    list_display = ('id','category', 'title', 'content', 'is_published', 'created_at', 'get_photo', 'author')
    list_display_links = ('id', 'title')
    search_fields = ['title', 'content']
    list_filter = ('is_published', 'created_at', 'author', 'category')
    list_editable = ('is_published', 'category')
    fields = ('title', 'content', 'is_published', 'photo', 'get_photo', 'category', 'created_at', 'updated_at', 'author')
    readonly_fields = ('get_photo', 'created_at', 'updated_at')
    form = NewsAdminForm

    
    def get_photo(self, obj):
        if obj.photo:
            return mark_safe(f'<img src="{obj.photo.url}" width="75" />')
        else:
            return 'No photo'
    get_photo_description = 'Миниатюры новости'

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')

admin.site.register(News, NewsAdmin)
admin.site.register(Category, CategoryAdmin)

admin.site.site_header = 'News Management System'
admin.site.site_title = 'News Admin Panel'
# Register your models here.
