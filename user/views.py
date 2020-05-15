from django.shortcuts import render, redirect
from user.forms.profile_form import ProfileForm, ImageForm
from user.forms.register_form import RegisterForm
from user.models import Customer
from user.models import SearchHistory


def index(request):
    pass


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
                'image_form': ImageForm(),
                'search_history': SearchHistory.objects.filter(user=request.user.id).order_by('time')
            }

    search_history = SearchHistory.objects.select_related('console').filter(user_id=request.user.id).order_by('-time')
    search_history = list(map(lambda x: x.console, search_history))
    context = {
        'profile_form': ProfileForm(),
        'image_form': ImageForm(),
        'search_history': search_history
    }
    return render(request, 'user/profile.html', context)
