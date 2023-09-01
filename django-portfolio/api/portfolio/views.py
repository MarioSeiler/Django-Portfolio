from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Technology
from .serializers import TechnologySerializer
from . import serializers
from .utils import (
    updateTechnology,
    getTechnologyDetail,
    deleteTechnology,
    getTechnologyList,
    createTechnology,
    getProjectList,
    getProjectDetail,
    getTechnologySubgroupDetail,
    getTechnologySubgroupList)
# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/technologySubgroups/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of technology subgroups'
        },
        {
            'Endpoint': '/technologySubgroups/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single technologySubgroup object'
        },
        {
            'Endpoint': '/technologies/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of technologies'
        },
        {
            'Endpoint': '/technologies/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single technologies object'
        },
        {
            'Endpoint': '/technologies/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new technologies with data sent in post request'
        },
        {
            'Endpoint': '/technologies/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing technology with data sent in post request'
        },
        {
            'Endpoint': '/technologies/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting technology'
        },
        {
            'Endpoint': '/projects/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of projects'
        },
        {
            'Endpoint': '/projects/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single project object'
        },
    ]
    return Response(routes)


# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE

@api_view(['GET', 'POST'])
def getTechnologies(request):

    if request.method == 'GET':
        return getTechnologyList(request)

    if request.method == 'POST':
        return createTechnology(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getTechnology(request, pk):

    if request.method == 'GET':
        return getTechnologyDetail(request, pk)

    if request.method == 'PUT':
        return updateTechnology(request, pk)

    if request.method == 'DELETE':
        return deleteTechnology(request, pk)


@api_view(['GET'])
def getProjects(request):

    if request.method == 'GET':
        return getProjectList(request)


@api_view(['GET'])
def getProject(request, pk):

    if request.method == 'GET':
        return getProjectDetail(request, pk)


@api_view(['GET'])
def getTechnologySubgroups(request):

    if request.method == 'GET':
        return getTechnologySubgroupList(request)


@api_view(['GET'])
def getTechnologySubgroup(request, pk):

    if request.method == 'GET':
        return getTechnologySubgroupDetail(request, pk)
