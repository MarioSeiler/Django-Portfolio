from django.urls import include, path
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('projects/', views.getProjects, name="projects"),
    path('projects/<str:pk>/', views.getProject, name="project"),
    path('technologies/', views.getTechnologies, name="technologies"),
    path('technologies/<str:pk>/', views.getTechnology, name="technology"),
]
