# teoric_content_manager/urls.py

from django.urls import path
from .views import PDFListView, PDFCreateView, PDFRetrieveUpdateDestroyView

urlpatterns = [
    path('pdf/', PDFListView.as_view(), name='pdf-list'),
    path('pdf/create/', PDFCreateView.as_view(), name='pdf-create'),
    path('pdf/edite/', PDFRetrieveUpdateDestroyView.as_view(), name='pdf-edite'),
]
