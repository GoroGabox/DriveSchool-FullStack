from rest_framework.viewsets import ModelViewSet
from .models import Practic_Classes, Routes
from .serializers import PracticClassesSerializer, RoutesSerializer

class PracticClassesViewSet(ModelViewSet):
    queryset = Practic_Classes.objects.all()
    serializer_class = PracticClassesSerializer

class RoutesViewSet(ModelViewSet):
    queryset = Routes.objects.all()
    serializer_class = RoutesSerializer