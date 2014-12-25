from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.views.generic import TemplateView
from myapp.views import hotel_list

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^hotels/$', hotel_list),
)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)