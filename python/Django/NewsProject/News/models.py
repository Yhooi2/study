from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    photo = models.ImageField(upload_to='media/%Y/%m/%d/')
    is_published = models.BooleanField(default=False)
    author = models.ForeignKey('Humans.Human', on_delete=models.CASCADE)
# Create your models here.
