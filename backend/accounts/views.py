# views.py
from django.contrib.auth import get_user_model
from accounts.serializers import MyTokenObtainPairSerializer, UserSerializer, ProfessorRegisterSerializer, SellerRegisterSerializer, StudentRegisterSerializer, StudentSerializer, ProfessorSerializer, SellerSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.viewsets import ModelViewSet
from .models import Student, Seller, Professor

User = get_user_model()

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class StudentRegisterView(CreateAPIView):
    serializer_class = StudentRegisterSerializer

    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            student = serializer.save()
            refresh = RefreshToken.for_user(student)
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': StudentSerializer(student).data,
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfessorRegisterView(CreateAPIView):
    serializer_class = ProfessorRegisterSerializer

    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            professor = serializer.save()
            refresh = RefreshToken.for_user(professor)
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': ProfessorSerializer(professor).data,
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SellerRegisterView(CreateAPIView):
    serializer_class = SellerRegisterSerializer

    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            seller = serializer.save()
            refresh = RefreshToken.for_user(seller)
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': SellerSerializer(seller).data,
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LogOutAPIView(APIView):
    def post(self, request, format=None):
        try:
            refresh_token = request.data.get('refresh')
            token_obj = RefreshToken(refresh_token)
            token_obj.blacklist()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UserListViewset(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes= []

class StudentViewset(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class ProfessorViewset(ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class SellerViewset(ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer