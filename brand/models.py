from django.db import models


class Brand(models.Model):
    name = models.CharField(max_length=255)
    logo = models.CharField(max_length=999, blank=True)
    description = models.CharField(max_length=999, blank=True)

    def __str__(self):
        return self.name

