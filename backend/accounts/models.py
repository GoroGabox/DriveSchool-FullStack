from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from cars.models import Car

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_student(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('user_type', 'student')
        return self.create_user(email, name, password, **extra_fields)

    def create_professor(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('user_type', 'professor')
        return self.create_user(email, name, password, **extra_fields)

    def create_seller(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('user_type', 'seller')
        return self.create_user(email, name, password, **extra_fields)

    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, name, password, **extra_fields)

class User(AbstractBaseUser):
    USER_TYPE_CHOICES = (
        ('student', 'Student'),
        ('professor', 'Professor'),
        ('seller', 'Seller'),
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)
    name = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    email = models.EmailField(max_length=255, unique=True)
    rut = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    cellphone = models.CharField(max_length=15, blank=True, null=True)
    created_date = models.DateField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','lastname' ,'rut','address','cellphone']

    objects = UserManager()

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.id:
            self.date = timezone.now().date()
            self.hour = timezone.now()
        super(User, self).save(*args, **kwargs)

class Student(User):
    has_licence = models.BooleanField(default=False)
    practic_eval = models.BooleanField(default=False)
    teoric_eval = models.BooleanField(default=False)
    psychotechnic_eval = models.BooleanField(default=False)

class Professor(User):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    last_CEMEP_date = models.DateField()
    valid_until = models.DateField()

class Seller(User):
    subsidiary = models.CharField(max_length=30)