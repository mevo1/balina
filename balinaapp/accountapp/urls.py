from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="intro-page"),
    path("intro-page", views.index, name="intro-page"),
    path("login", views.login_request, name="login"),
    path("register", views.register_request, name="register"),
    path("logout", views.logout_request, name="logout"),
]