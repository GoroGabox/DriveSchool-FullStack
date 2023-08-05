from rest_framework.viewsets import ModelViewSet
from .models import Car, Maintence
from .serializers import CarSerializer, MaintenceSerializer

class CarViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class MaintenceViewSet(ModelViewSet):
    queryset = Maintence.objects.all()
    serializer_class = MaintenceSerializer