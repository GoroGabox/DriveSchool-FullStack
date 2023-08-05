from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from accounts.views import (
    StudentRegisterView, 
    ProfessorRegisterView, 
    SellerRegisterView,
    LogOutAPIView,
    MyTokenObtainPairView,
    UserListView,
    UserListView,
    StudentView,
    ProfessorView,
    SellerView,
)

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='login_view'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh_view'),
    path('logout/', LogOutAPIView.as_view(), name='logout_view'),
    path('register/student/', StudentRegisterView.as_view(), name='student_register_view'),
    path('register/professor/', ProfessorRegisterView.as_view(), name='professor_register_view'),
    path('register/seller/', SellerRegisterView.as_view(), name='seller_register_view'),
    path('users/', UserListView.as_view(), name='user_list_view'),
    path('students/<int:pk>/', StudentView.as_view(), name='student_detail_view'),
    path('professors/<int:pk>/', ProfessorView.as_view(), name='professor_detail_view'),
    path('sellers/<int:pk>/', SellerView.as_view(), name='seller_detail_view'),

]
