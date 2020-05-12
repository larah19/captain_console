from django.forms import ModelForm, widgets
from user.models import Customer


class ProfileForm(ModelForm):
    class Meta:
        model = Customer
        exclude = ['id', 'user']
        widgets = {
            'profile_image': widgets.TextInput(attrs={'class': 'form-control'})
        }
