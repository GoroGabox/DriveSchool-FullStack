from django.urls import path
from .views  import CarViewSet, MaintenceViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', CarViewSet, basename='car')
router.register(r'maintence', MaintenceViewSet, basename='maintence')

urlpatterns = router.urls