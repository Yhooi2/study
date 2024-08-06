from django.db import models

class Humans(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    age = models.IntegerField(verbose_name='Возраст')
    city = models.CharField(max_length=20, verbose_name='Город')
    profession = models.ForeignKey('Professions', on_delete=models.PROTECT, null=True, verbose_name='Должность')
    
    class Meta:
        verbose_name = 'Человек'
        verbose_name_plural = 'Люди' 
        ordering = ['name']
         

class Professions(models.Model):
    title = models.CharField(max_length=100, verbose_name='Должность')

    class Meta:
        verbose_name = 'Должность'
        verbose_name_plural = 'Должности'
        ordering = ['title']
