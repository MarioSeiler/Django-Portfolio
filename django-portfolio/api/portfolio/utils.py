from rest_framework.response import Response
from .models import Technology, Project, TechnologySubgroup
from .serializers import ProjectSerializer, TechnologySerializer, TechnologySubgroupSerializer


def getProjectList(request):
    projects = Project.objects.all().order_by('-date')
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


def getProjectDetail(request, pk):
    project = Project.objects.get(id=pk)
    project.technology = project.technologies.all()
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)


def getTechnologyList(request):
    technologies = Technology.objects.all().order_by('-subgroup')
    serializer = TechnologySerializer(technologies, many=True)
    return Response(serializer.data)


def getTechnologyDetail(request, pk):
    technologies = Technology.objects.get(id=pk)
    serializer = TechnologySerializer(technologies, many=False)
    return Response(serializer.data)

def getTechnologyFromSubgroupId(request, fk):
    technologies = Technology.objects.filter(subgroup=fk)
    serializer = TechnologySerializer(technologies, many=True)
    return Response(serializer.data)


def getTechnologySubgroupList(request):
    subgroups = TechnologySubgroup.objects.all().order_by('-name')
    serializer = TechnologySubgroupSerializer(subgroups, many=True)
    return Response(serializer.data)


def getTechnologySubgroupDetail(request, pk):
    subgroup = TechnologySubgroup.objects.get(id=pk)
    serializer = TechnologySubgroupSerializer(subgroup, many=False)
    return Response(serializer.data)



def createTechnology(request):
    data = request.data
    technology = Technology.objects.create(
        body=data['body']
    )
    serializer = TechnologySerializer(technology, many=False)
    return Response(serializer.data)

def updateTechnology(request, pk):
    data = request.data
    technology = Technology.objects.get(id=pk)
    serializer = TechnologySerializer(instance=technology, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteTechnology(request, pk):
    technology = Technology.objects.get(id=pk)
    technology.delete()
    return Response('Technology was deleted!')