from django.db import models

# Create your models here.

class Car(models.Model):
    modelo = models.CharField(max_length=30)
    marca = models.CharField(max_length=30)
    patente = models.CharField(max_length=10)
    anno = models.IntegerField()
    last_revision = models.DateField()
    next_revision = models.DateField()

    def __str__(self) -> str:
        return self.modelo

class Maintence(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField()