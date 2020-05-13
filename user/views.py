from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth.models import User

from user.forms.profile_form import ProfileForm, ImageForm
from user.forms.register_form import RegisterForm
from user.models import Customer


def index(request):
    print("Hello")


def register(request):
    if request.method == "POST":
        form = RegisterForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    return render(request, 'user/register.html', {
        'form': RegisterForm()
    })


def profile(request):
    profile = Customer.objects.filter(user=request.user).first()
    if request.method == "POST":
        # The instance has to be of class User, not Customer like the variable profile is.
        # Hence, instance=request.user vs. instance=profile.
        profile_form = ProfileForm(instance=request.user, data=request.POST)
        image_form = ImageForm(instance=profile, data=request.POST)
        if profile_form.is_valid() and image_form.is_valid():
            image = image_form.save(commit=False)
            profile = profile_form.save(commit=False)
            profile.user = request.user
            image.user = request.user
            profile.save()
            image.save()
            return redirect('profile')
        else:
            # TODO: Error handling, if either form isn't valid.
            context = {
                'profile_form': ProfileForm(),
                'image_form': ImageForm()
            }
    context = {
        'profile_form': ProfileForm(),
        'image_form': ImageForm()
    }
    return render(request, 'user/profile.html', context)

