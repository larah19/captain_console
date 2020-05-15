from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.contrib.auth.models import User
from console.models import Console


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.CharField(max_length=9999)


class SearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    console = models.ForeignKey(Console, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
