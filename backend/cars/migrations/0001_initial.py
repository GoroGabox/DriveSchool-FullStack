# Generated by Django 4.2.3 on 2023-07-22 17:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo', models.CharField(max_length=30)),
                ('marca', models.CharField(max_length=30)),
                ('patente', models.CharField(max_length=10)),
                ('anno', models.IntegerField()),
                ('last_revision', models.DateField()),
                ('next_revision', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Maintence',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('description', models.TextField()),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cars.car')),
            ],
        ),
    ]
