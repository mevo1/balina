from django.urls import path
from . import views

urlpatterns = [
    # İNDİCATOR URLS
    path('backtest/', views.backtest_page, name='backtest_page'),

]
