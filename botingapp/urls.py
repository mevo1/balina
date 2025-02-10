from django.urls import path
from . import views

urlpatterns = [
    path('boting/', views.boting_page, name='boting_page'),
    path('api/bot-list/', views.bot_list, name='bot_list'),
    path('api/bot-add/', views.bot_add, name='bot_add'),
    path('api/bot-view/<int:id>/', views.bot_view, name='bot_view'),

    #Analyze
    path('bot-analyze/<int:id>/', views.bot_analyze, name='bot_analyze'),
    path('bot-remove/<int:id>/', views.bot_remove, name='bot_remove'),
]
