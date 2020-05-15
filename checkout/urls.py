from django.urls import path
from . import views

urlpatterns =[
    path('', views.index, name="checkout-index"),
    path('payment/', views.payment, name="payment"),
    path('payment/confirm/', views.confirmation, name="confirmation"),
    path('payment/confirm/success/', views.success, name="success")
]