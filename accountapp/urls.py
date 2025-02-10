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
    path('botting/', views.botting, name='botting'),
    path('sift/', views.sift, name='sift'),
    path('api/', views.api, name='api'),
    path('buysell/', views.buysell, name='buysell'),
    path('community/', views.community, name='community'),
    path('deneme/', views.deneme, name='deneme'),
]