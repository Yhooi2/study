from django.contrib import admin
from .models import Humans, Professions

class HumanAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'profession', 'age', 'city')
    list_display_links = ('id', 'name', 'profession')
    search_fields = ['name', 'city']
    list_filter = ('age', 'city')

class ProfessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')

admin.site.register(Humans, HumanAdmin)
admin.site.register(Professions, ProfessionAdmin)
# Register your models here.
