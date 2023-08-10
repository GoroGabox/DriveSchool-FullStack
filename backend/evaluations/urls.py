from django.urls import path
from .views  import EvaluationTypeViewSet, EvaluationViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', EvaluationViewSet, basename='evaluation')
router.register(r'type_of', EvaluationTypeViewSet, basename='types')

urlpatterns = router.urls