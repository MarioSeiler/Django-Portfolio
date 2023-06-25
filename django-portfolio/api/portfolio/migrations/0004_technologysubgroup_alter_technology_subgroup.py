# Generated by Django 4.1.5 on 2023-01-13 22:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_technology_remove_project_technologies_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TechnologySubgroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=55)),
            ],
        ),
        migrations.AlterField(
            model_name='technology',
            name='subgroup',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portfolio.technologysubgroup'),
        ),
    ]
