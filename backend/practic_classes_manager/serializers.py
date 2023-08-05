from rest_framework import serializers
from .models import Practic_Classes, Routes

class PracticClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practic_Classes
        fields = ('__all__')


class RoutesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routes
        fields = ('__all__')