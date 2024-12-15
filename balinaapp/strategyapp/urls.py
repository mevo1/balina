from django.urls import path
from . import views

urlpatterns = [
    path('strategy/', views.strategy_page, name='strategy_page'),
    path('api/strategies_list/', views.list_strategy, name='list_strategy'),
    path('api/strategy/', views.add_strategy, name='add_strategy'),
    path('api/strategy_edit/<int:id>/', views.update_strategy, name='update_strategy'),
    path('api/strategies/<int:id>/', views.open_strategy, name='open_strategy'),
    path('api/del-strategies/<int:id>/', views.del_strategy, name='del_strategy'),
]