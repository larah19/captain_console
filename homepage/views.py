from django.shortcuts import render
from console.models import Console

# Create your views here.
def index(request):
    context = {'nintendo': Console.objects.filter(brand_id=1).order_by('name'),
               'microsoft': Console.objects.filter(brand_id=2).order_by('name'),
               'sony': Console.objects.filter(brand_id=3).order_by('name'),
               'sega': Console.objects.filter(brand_id=4).order_by('name')
               }
    return render(request, "homepage.html")

def search_results(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        consoles = [console for console in Console.objects.filter(name__icontains=search_filter)]
        # TODO: Exception handling, if no results.
        context = {'consoles': consoles}
        return render(request, 'console/filterindex.html', context)