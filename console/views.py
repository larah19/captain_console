from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from console.models import Console
from django.shortcuts import redirect
from user.mixins import ObjectViewMixin


def index(request):
    context = {'nintendo': Console.objects.filter(brand_id=1).order_by('name'),
               'microsoft': Console.objects.filter(brand_id=2).order_by('name'),
               'sony': Console.objects.filter(brand_id=3).order_by('name'),
               'sega': Console.objects.filter(brand_id=4).order_by('name')
               }
    return render(request, 'console/index.html', context)


def search_results(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        consoles = [console for console in Console.objects.filter(name__icontains=search_filter)]
        # TODO: Exception handling, if no results.
        context = {'consoles': consoles}
        return render(request, 'console/filterindex.html', context)


def order_by(request):
    if 'order_by' in request.GET:
        attribute = request.GET['order_by']
        if attribute == "price_desc":
            consoles = [console for console in Console.objects.all().order_by('-price')]
        elif attribute == "price_asc":
            consoles = [console for console in Console.objects.all().order_by('price')]
        elif attribute == "name":
            consoles = [console for console in Console.objects.all().order_by('name')]
        # else:
        #     # TODO: Error handling. Not possible to order by.

        context = {'consoles': consoles}
        return render(request, 'console/filterindex.html', context)


def get_consoles_by_group(request):
    path = request.path
    group = path.strip().split('/')[2]

    if group == 'nintendo':
        context = {'consoles': Console.objects.filter(brand_id=1).order_by('name'),
                   'group': 'Nintendo'}
    elif group == 'microsoft':
        context = {'consoles': Console.objects.filter(brand_id=2).order_by('name'),
                   'group': 'Microsoft'}
    elif group == 'sony':
        context = {'consoles': Console.objects.filter(brand_id=3).order_by('name'),
                   'group': 'Sony'}
    elif group == 'sega':
        context = {'consoles': Console.objects.filter(brand_id=4).order_by('name'),
                   'group': 'SEGA'}
    elif group == 'handheld':
        context = {'consoles': Console.objects.filter(category_id=1),
                   'group': 'Handheld'}
    elif group == 'home_consoles':
        context = {'consoles': Console.objects.filter(category_id=2),
                   'group': 'Home Consoles'}
    # else:
    #     # TODO: Error handling, category does not exist, url not mapped.

    return render(request, 'console/filterindex.html', context)


def get_console_by_id(request, id):
    context = {'console': get_object_or_404(Console, pk=id)}
    return render(request, 'console/console_details.html', context)

