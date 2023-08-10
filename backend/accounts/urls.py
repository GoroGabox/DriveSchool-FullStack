from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
from accounts.views import (
    StudentRegisterView, 
    ProfessorRegisterView, 
    SellerRegisterView,
    LogOutAPIView,
    MyTokenObtainPairView,
    UserListViewset,
    UserListViewset,
    StudentViewset,
    ProfessorViewset,
    SellerViewset,
)

router = DefaultRouter()
router.register(r'users', UserListViewset, basename='users')
router.register(r'students', StudentViewset, basename='students')
router.register(r'professors', ProfessorViewset, basename='professors')
router.register(r'sellers', SellerViewset, basename='sellers')

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='login_view'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh_view'),
    path('logout/', LogOutAPIView.as_view(), name='logout_view'),
    path('register/student/', StudentRegisterView.as_view(), name='student_register_view'),
    path('register/professor/', ProfessorRegisterView.as_view(), name='professor_register_view'),
    path('register/seller/', SellerRegisterView.as_view(), name='seller_register_view'),
] + router.urls
