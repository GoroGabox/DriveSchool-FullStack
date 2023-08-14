from django.contrib import admin
from .models import Seller, Student, Professor

# Register your models here.

admin.site.register(Seller)
admin.site.register(Student)
admin.site.register(Professor)