from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'checkout/checkout.html')


def payment(request):
    return render(request, 'checkout/payment.html')
