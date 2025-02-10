from django.contrib import admin
from .models import Backtest

class BacktestAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'strategy_id', 'first_margin', 'commission', 'moving_tp', 'moving_sl')
    search_fields = ('name', 'user__username', 'strategy_id')
    list_filter = ('user', 'moving_tp', 'moving_sl', 'commission')
    fields = ('user', 'name', 'strategy_id', 'coin_list', 'first_margin', 'commission', 'moving_tp', 'moving_sl')
    ordering = ('-id',)

admin.site.register(Backtest, BacktestAdmin)
