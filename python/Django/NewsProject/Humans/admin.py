from django.contrib import admin
from .models import Human

class HumanAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'city')
    list_display_links = ('id', 'name')
    search_fields = ['name', 'city']
    list_filter = ('age', 'city')
admin.site.register(Human, HumanAdmin)
# Register your models here.
