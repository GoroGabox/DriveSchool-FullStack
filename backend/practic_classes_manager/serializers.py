from rest_framework import serializers
from .models import Practic_Classes

class PracticClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practic_Classes
        fields = ('__all__')

