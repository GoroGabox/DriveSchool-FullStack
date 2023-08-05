from django.db import models

# Create your models here.


class PDFFile(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    pdf_file = models.FileField(upload_to='pdf_files/')
    image = models.ImageField(upload_to='images_files/', null=True)

    def __str__(self):
        return self.title