from django.db import models
from accounts.models import Student

# Create your models here.

class Course(models.Model):
    name = models.CharField(max_length=20)
    cant_clases = models.IntegerField()
    theory_access = models.BooleanField(default=False)
    price = models.IntegerField()
    image_url = models.CharField(max_length=50, null=True)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name
    

class Sale(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    date = models.DateField()
    price_paid = models.IntegerField()
    pay_system = models.CharField(max_length=20)
    state = models.CharField(max_length=20)