from django.shortcuts import render
from .models import Human

def index(request):
    human = Human.objects.all()
    list = { 'human': human, 'title': 'Humans List' }
    return render(request, 'humans/index.html', context = list)
# Create your views here.
