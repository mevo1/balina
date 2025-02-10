from django.contrib.auth.models import User
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Strategy(models.Model):
    title = models.CharField(max_length=100)
    code = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    candles = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(200)
        ]
    )

    def __str__(self):
        return f"{self.title}"
    
