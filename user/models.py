from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.contrib.auth.models import User
from console.models import Console
from django.contrib.contenttypes.fields import GenericForeignKey

from .signals import object_viewed_signal


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.CharField(max_length=9999)


class SearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    console = models.ForeignKey(Console, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)


# class SearchHistory(models.Model):
#     user = models.ForeignKey(Customer, on_delete=models.CASCADE)
#     content_type = models.ForeignKey(ContentType, on_delete=models.SET_NULL, null=True)
#     object_id = models.PositiveIntegerField()
#     # console_id = models.ForeignKey(Console, on_delete=models.CASCADE)
#     content_object = GenericForeignKey()
#     time = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return str(self.object_id)
#
#
# def object_viewed_receiver(sender, instance, request, *args, **kwargs):
#     new_history = SearchHistory.objects.create(
#         user=request.user,
#         content_type=ContentType.objects.get_for_model(sender),
#         object_id=instance.id
#     )
#
#
# object_viewed_signal.connect(object_viewed_receiver)