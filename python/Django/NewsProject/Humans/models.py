from django.db import models

class Human(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    city = models.CharField(max_length=20)
    

# Create your models here.
