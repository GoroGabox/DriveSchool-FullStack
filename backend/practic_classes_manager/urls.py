from django.urls import path
from .views  import PracticClassesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', PracticClassesViewSet, basename='practic_class')

urlpatterns = router.urls