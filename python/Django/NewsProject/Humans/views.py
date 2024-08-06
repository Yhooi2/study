from django.shortcuts import render
from .models import Humans

def index(request):
    human = Humans.objects.all()
    list = { 'human': human, 'title': 'Humans List' }
    return render(request, 'humans/index.html', context = list)
# Create your views here.
