from django.urls import path
from .views  import CourseViewSet, SaleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', CourseViewSet, basename='course')
router.register(r'sales', SaleViewSet, basename='sale')

urlpatterns = router.urls