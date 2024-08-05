from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок')
    content = models.TextField(blank=True, verbose_name='Содержание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания'  )
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата изменения'  )
    photo = models.ImageField(upload_to='media/%Y/%m/%d/', verbose_name='Фотография'  )
    is_published = models.BooleanField(default=False, verbose_name='Опубликовано'  )
    author = models.ForeignKey('Humans.Human', on_delete=models.CASCADE, verbose_name='Автор' )

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-created_at']
