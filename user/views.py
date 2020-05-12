from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

from user.forms.profile_form import ProfileForm
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
        form = ProfileForm(instance=profile, data=request.POST)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    return render(request, 'user/profile.html', {
        'form': ProfileForm(instance=profile)
    })

