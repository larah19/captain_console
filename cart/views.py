from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from console.models import Console
from django.shortcuts import redirect
from django.core import serializers

def index(request):
    return render(request, 'cart/index.html')


####GAMALT####

#def add_to_cart(request,id):
    #name = request.GET.get('console_name')
    #console = Console.objects.get(name=name)
    #mycart = request.GET.get('cart-items')
    #console = get_object_or_404(Console, pk=id)
    #mycart = [console]
    # context = {'cart_items': mycart}
    #return render(request, 'cart/index.html', context)

#def remove_from_cart(request):
    #return render(request, 'cart/index.html')
#def checkout(request):
    #return render(request, 'cart/index.html')  # TODO: make checkout html
