from django.db import models

class Homan(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.PositiveIntegerField()
    address = models.TextField()
    