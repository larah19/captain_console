from django.forms import ModelForm, widgets
from user.models import Customer
from django.contrib.auth.models import User
from django import forms


class ProfileForm(ModelForm):
    class Meta:
        model = User
        exclude = ['id', 'user']
        fields = ('first_name', 'last_name', 'username')
        widgets = {
            'first_name': widgets.TextInput(attrs={'class': 'form-control'}),
            'last_name': widgets.TextInput(attrs={'class': 'form-control'}),
            'username': widgets.TextInput(attrs={'class': 'form-control'})
        }


class ImageForm(ModelForm):
    class Meta:
        model = Customer
        exclude = ['id', 'user']
        widgets = {
            'profile_image': widgets.TextInput(attrs={'class': 'form-control'})
        }