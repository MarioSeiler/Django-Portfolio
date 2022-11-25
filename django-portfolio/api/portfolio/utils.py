from rest_framework.response import Response
from .models import Technology, Project
from .serializers import ProjectSerializer, TechnologySerializer


def getProjectList(request):
    notes = Project.objects.all().order_by('-updated')
    serializer = ProjectSerializer(notes, many=True)
    return Response(serializer.data)


def getTechnologyList(request):
    notes = Technology.objects.all().order_by('-updated')
    serializer = TechnologySerializer(notes, many=True)
    return Response(serializer.data)


def getTechnologyDetail(request, pk):
    notes = Technology.objects.get(id=pk)
    serializer = TechnologySerializer(notes, many=False)
    return Response(serializer.data)


def createTechnology(request):
    data = request.data
    note = Technology.objects.create(
        body=data['body']
    )
    serializer = TechnologySerializer(note, many=False)
    return Response(serializer.data)

def updateTechnology(request, pk):
    data = request.data
    note = Technology.objects.get(id=pk)
    serializer = TechnologySerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteTechnology(request, pk):
    note = Technology.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')