from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="intro-page"),
    path("login", views.login_request, name="login"),
    path("register", views.register_request, name="register"),
    path("logout", views.logout_request, name="logout"),
    path('intropage/', views.intropage, name='intropage'),
    path('how_to_use/', views.how_to_use, name='how_to_use'),
    path('premium/', views.premium, name='premium'),
    path('about/', views.about, name='about'),
]