from django.urls import path
from . import views

urlpatterns = [
    path("indicator", views.indicator, name="indicator"),
]