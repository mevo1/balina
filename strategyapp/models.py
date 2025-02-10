from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Strategy(models.Model):
    title = models.CharField(max_length=100)
    code = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title}"
    
