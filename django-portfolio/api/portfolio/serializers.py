from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Project, Technology, TechnologySubgroup


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    technology = TechnologySerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'
        depth = 1

class TechnologySubgroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = TechnologySubgroup
        fields = '__all__'
