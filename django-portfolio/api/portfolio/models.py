from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Technology(models.Model):
    name = models.CharField(max_length=55)
    mastery = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(100)])

    def __str__(self):
        return self.name
    


class TechnologySubgroup(models.Model):
    name = models.CharField(max_length=55)
    technologies = models.ManyToManyField(Technology)

    def __str__(self):
        return self.name



class Project(models.Model):
    name = models.CharField(max_length=55)
    github = models.URLField()
    date = models.DateField()
    description = models.TextField()
    technologies = models.ManyToManyField(Technology)

    def __str__(self):
        return self.name
