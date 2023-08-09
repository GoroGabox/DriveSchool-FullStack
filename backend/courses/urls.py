from django.urls import path
from .views  import CourseViewSet, SaleViewSet, Sales_StudentsView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', CourseViewSet, basename='course')
router.register(r'sales', SaleViewSet, basename='sale')

urlpatterns = [
    path('students-courses/',Sales_StudentsView.as_view(), name='sales_student'),
    ] + router.urls