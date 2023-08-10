from django.db import models
from accounts.models import Student, Professor

# Create your models here.

class EvaluationType(models.Model):
    name = models.CharField(max_length=15)

class Evaluation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    professor = models.ForeignKey(Professor, on_delete=models.CASCADE)
    eval_type = models.ForeignKey(EvaluationType, on_delete=models.CASCADE)

    created_date = models.DateField(auto_now_add=True)
    created_time = models.DateTimeField(auto_now_add=True)

    approved = models.BooleanField()