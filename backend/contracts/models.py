from django.db import models
from accounts.models import Professor

# Create your models here.

class Contract(models.Model):
    profesor = models.ForeignKey(Professor, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
