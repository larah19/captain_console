from django.urls import path
from . import views

urlpatterns = [
    # http://localhost:8000/brands
    path('', views.index, name="brand-index"),
]