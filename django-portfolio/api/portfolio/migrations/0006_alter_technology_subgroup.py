# Generated by Django 4.1.5 on 2023-01-13 23:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_alter_technology_subgroup'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technology',
            name='subgroup',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portfolio.technologysubgroup'),
        ),
    ]