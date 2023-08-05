from rest_framework.viewsets import ModelViewSet
from .models import Evaluation, EvaluationType
from .serializers import EvaluationSerializer, EvaluationTypeSerializer

class EvaluationViewSet(ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer

class EvaluationTypeViewSet(ModelViewSet):
    queryset = EvaluationType.objects.all()
    serializer_class = EvaluationTypeSerializer