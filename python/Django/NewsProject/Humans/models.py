from django.db import models

class Human(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    age = models.IntegerField(verbose_name='Возраст')
    city = models.CharField(max_length=20, verbose_name='Город')
    
    class Meta:
        verbose_name = 'Человек'
        verbose_name_plural = 'Люди'   

# Create your models here.
