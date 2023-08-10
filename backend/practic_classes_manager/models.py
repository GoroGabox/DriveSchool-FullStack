from django.db import models
from accounts.models import Student, Professor, Seller

# Create your models here.


class Practic_Classes(models.Model):
    student = models.ForeignKey(Student, on_delete = models.CASCADE)
    professor = models.ForeignKey(Professor, on_delete = models.DO_NOTHING)
    seller = models.ForeignKey(Seller, on_delete = models.DO_NOTHING)

    class_date = models.DateField()
    class_hour = models.TimeField()
    attended = models.BooleanField(default=False)

