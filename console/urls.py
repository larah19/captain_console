from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="console-index"),
    path('nintendo/', views.get_consoles_by_group, name="nintendo-index"),
    path('microsoft/', views.get_consoles_by_group, name="microsoft-index"),
    path('sony/', views.get_consoles_by_group, name="sony-index"),
    path('sega/', views.get_consoles_by_group, name="sega-index"),
    path('handheld/', views.get_consoles_by_group, name="handheld-index"),
    path('home_consoles/', views.get_consoles_by_group, name="homeconsole-index"),
    path('search/', views.get_consoles_by_group, name='console-searchindex'),
    path('<int:id>', views.get_console_by_id, name="console_details"),
    # path'fun_stuff', views.get_/

]
