from django.urls import path
from .views  import PracticClassesViewSet, RoutesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', PracticClassesViewSet, basename='practic_class')
router.register(r'routes', RoutesViewSet, basename='route')

urlpatterns = router.urls