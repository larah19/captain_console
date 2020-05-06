from django.db import models
from brand.models import Brand


class ConsoleCategory(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Console(models.Model):
    name = models.CharField(max_length=255)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    category = models.ForeignKey(ConsoleCategory, on_delete=models.CASCADE)
    price = models.FloatField()
    description = models.CharField(max_length=999, blank=True)

    def __str__(self):
        return self.name


class ConsoleImage(models.Model):
    image = models.CharField(max_length=999)
    console = models.ForeignKey(Console, on_delete=models.CASCADE)

    def __str__(self):
        return self.image
