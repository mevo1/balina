from django.urls import path
from . import views

urlpatterns = [
    # BEFORE-TEST URLS
    path('backtest/', views.backtest_page, name='backtest_page'),
    path('api/backtest-list/', views.backtest_list, name='backtest_list'),
    path('api/backtest-add/', views.backtest_add, name='backtest_add'),
    path('api/backtest-view/<int:id>/', views.backtest_view, name='backtest_view'),
    
    # AFTER-TEST
    path('result/', views.result, name='result'),
    path('api/backtest-result/<int:id>/', views.backtest_result, name='backtest_result'),

]
