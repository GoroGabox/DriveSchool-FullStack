from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from .models import Course, Sale
from .serializers import CourseSerializer, SaleSerializer
from rest_framework.permissions import IsAuthenticated

class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class SaleViewSet(ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

class Sales_StudentsView(ListAPIView):
    serializer_class = SaleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Sale.objects.filter(student=user)