
from django.contrib import admin
from django.urls import path, include
from django.conf import settings 
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('news/', include('News.urls')),
    path('humans/', include('Humans.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
   # path('captcha/', include('captcha.urls')),
]  

if settings.DEBUG:
    from debug_toolbar.toolbar import debug_toolbar_urls

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + debug_toolbar_urls()
