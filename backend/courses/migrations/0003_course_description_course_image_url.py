# Generated by Django 4.1.4 on 2023-08-03 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_alter_sale_student'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='image_url',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
