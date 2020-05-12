from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="console-index"),
    path('search/', views.search_results, name='search-results'),
]