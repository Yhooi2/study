from django.db import models
from django.urls import reverse_lazy

class News(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок')
    content = models.TextField(blank=True, verbose_name='Содержание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания'  )
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата изменения'  )
    photo = models.ImageField(upload_to='media/%Y/%m/%d/', verbose_name='Фотография'  )
    is_published = models.BooleanField(default=False, verbose_name='Опубликовано'  )
    author = models.ForeignKey('Humans.Humans', on_delete=models.CASCADE, verbose_name='Автор' )
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True, verbose_name='Категория' )
    
    def get_absolute_url(self):
        return reverse_lazy("View_news", kwargs={"news_id": self.pk})
    
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-created_at']

class Category(models.Model):
    title = models.CharField(max_length=150, db_index=True, verbose_name='Категория')
    
    def get_absolute_url(self):
        return reverse_lazy("Category", kwargs={"category_id": self.pk})
      
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['title']
