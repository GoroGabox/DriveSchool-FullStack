# Generated by Django 4.2.3 on 2023-07-22 21:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
        ('accounts', '0002_professor_remove_profesor_car_and_more'),
        ('contracts', '0002_alter_contract_profesor'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Profesor',
        ),
        migrations.AddField(
            model_name='professor',
            name='car',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cars.car'),
        ),
    ]
