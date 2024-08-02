from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from News.views import index

urlpatterns = [
    path('', index, name='index'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)