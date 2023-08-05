from rest_framework import serializers
from .models import Car, Maintence

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('__all__')


class MaintenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Maintence
        fields = ('__all__')