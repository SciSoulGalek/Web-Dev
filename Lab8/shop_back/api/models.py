from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.FloatField()
    image = models.URLField(default="https://example.com/default.jpg")
    link = models.URLField(default="https://example.com/")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)


    def __str__(self):
        return self.name
