# Generated by Django 4.1.4 on 2023-08-10 05:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('evaluations', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evaluation',
            name='eval_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='evaluations.evaluationtype'),
        ),
    ]