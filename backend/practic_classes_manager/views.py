from rest_framework.viewsets import ModelViewSet
from .models import Practic_Classes
from .serializers import PracticClassesSerializer

class PracticClassesViewSet(ModelViewSet):
    queryset = Practic_Classes.objects.all()
    serializer_class = PracticClassesSerializer
