from django.shortcuts import render
from brand.models import Brand


def index(request):
    context = {'brands': Brand.objects.all()}
    return render(request, 'brand/index.html', context)

