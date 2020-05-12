from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from console.models import Console
from django.shortcuts import redirect
from django.core import serializers

def index(request):
    return render(request, 'cart/index.html')



