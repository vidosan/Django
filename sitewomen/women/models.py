from django.db import models

class Women(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(blank=True)
    time_created = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published=models.BooleanField(default=True)

