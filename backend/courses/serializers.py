from rest_framework import serializers
from .models import Course, Sale

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('__all__')


class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = ('__all__')