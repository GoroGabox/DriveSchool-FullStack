# Generated by Django 4.1.4 on 2023-08-03 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('practic_classes_manager', '0004_alter_practic_classes_professor_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='practic_classes',
            name='class_hour',
            field=models.TimeField(),
        ),
    ]
