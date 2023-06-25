from django.contrib import admin

# Register your models here.

from .models import Project, Technology, TechnologySubgroup

admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(TechnologySubgroup)
