# serializers.py
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from .models import Student, Professor, Seller
from cars.models import Car

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class StudentSerializer(serializers.ModelSerializer):
    has_licence = serializers.BooleanField(default=False)
    practic_eval = serializers.BooleanField(default=False)
    teoric_eval = serializers.BooleanField(default=False)
    psychotechnic_eval = serializers.BooleanField(default=False)

    class Meta:
        model = Student
        fields = ('__all__')

class ProfessorSerializer(serializers.ModelSerializer):
    car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all())
    last_CEMEP_date = serializers.DateField()
    valid_until = serializers.DateField()

    class Meta:
        model = Professor
        fields = ('__all__')

class SellerSerializer(serializers.ModelSerializer):
    subsidiary = serializers.CharField(max_length=30)

    class Meta:
        model = Seller
        fields = ('__all__')

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'name',
            'lastname',
            'email',
            'password',
            'password2',
            'address',
            'rut',
            'cellphone',
            'user_type',
        ]

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("The two passwords differ")
        return data

class StudentRegisterSerializer(UserRegisterSerializer):
    has_licence = serializers.BooleanField(default=False)
    practic_eval = serializers.BooleanField(default=False)
    teoric_eval = serializers.BooleanField(default=False)
    psychotechnic_eval = serializers.BooleanField(default=False)

    class Meta(UserRegisterSerializer.Meta):
        model = Student
        fields = UserRegisterSerializer.Meta.fields + ['has_licence', 'practic_eval', 'teoric_eval', 'psychotechnic_eval']

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2', None)

        # Crear una nueva instancia de Student con los campos específicos de Student
        student = Student.objects.create(
            has_licence=validated_data.pop('has_licence', False),
            practic_eval=validated_data.pop('practic_eval', False),
            teoric_eval=validated_data.pop('teoric_eval', False),
            psychotechnic_eval=validated_data.pop('psychotechnic_eval', False),
            **validated_data
        )
        # Establecer la contraseña del usuario
        student.set_password(password)
        student.save()
        return student

class ProfessorRegisterSerializer(UserRegisterSerializer):
    car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all())
    last_CEMEP_date = serializers.DateField()
    valid_until = serializers.DateField()

    class Meta(UserRegisterSerializer.Meta):
        model = Professor
        fields = UserRegisterSerializer.Meta.fields + ['car', 'last_CEMEP_date', 'valid_until']

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2', None)
        # Crear una nueva instancia de Professor con los campos específicos de Professor
        professor = Professor.objects.create(
            car=validated_data.pop('car'),
            last_CEMEP_date=validated_data.pop('last_CEMEP_date'),
            valid_until=validated_data.pop('valid_until'),
            **validated_data
        )
        # Establecer la contraseña del usuario
        professor.set_password(password)
        professor.save()
        return professor

class SellerRegisterSerializer(UserRegisterSerializer):
    subsidiary = serializers.CharField(max_length=30)

    class Meta(UserRegisterSerializer.Meta):
        model = Seller
        fields = UserRegisterSerializer.Meta.fields + ['subsidiary']

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2', None)
        # Crear una nueva instancia de Seller con los campos específicos de Seller
        seller = Seller.objects.create(
            subsidiary=validated_data.pop('subsidiary'),
            **validated_data
        )
        # Establecer la contraseña del usuario
        seller.set_password(password)
        seller.save()
        return seller
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name
        token['lastname'] = user.lastname
        token['cellphone'] = user.cellphone
        token['user_type'] = user.user_type
        # ...

        return token