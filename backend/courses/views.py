from rest_framework.viewsets import ModelViewSet
from .models import Course, Sale
from .serializers import CourseSerializer, SaleSerializer

class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class SaleViewSet(ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer