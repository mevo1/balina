from django.contrib import admin
from .models import Bot, BotTransaction, BotSituation

class BotAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'strategy_id', 'interval', 'first_amount', 'last_amount', 'moving_tp', 'moving_sl')
    search_fields = ('name', 'user__username', 'strategy_id__name', 'interval')
    list_filter = ('user', 'strategy_id', 'interval', 'moving_tp', 'moving_sl')
    fields = (
        'user', 
        'name', 
        'strategy_id', 
        'coin_list',
        'interval',
        'first_amount',
        'day_first_amount',
        'week_first_amount',
        'month_first_amount',
        'last_amount',
        'moving_tp',
        'moving_sl'
    )
    ordering = ('-id',)

class BotTransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'bot', 'asset', 'amount', 'piece', 'transaction', 'date')
    search_fields = ('user__username', 'bot__name', 'asset__symbol')
    list_filter = ('user', 'bot', 'asset', 'transaction', 'date')
    fields = (
        'user',
        'bot',
        'asset',
        'amount',
        'piece',
        'transaction',
    )
    readonly_fields = ('date',)
    ordering = ('-date',)

class BotSituationAdmin(admin.ModelAdmin):
    list_display = ('bot', 'user', 'last_update')
    search_fields = ('bot__name', 'user__username')
    list_filter = ('user', 'bot', 'last_update')
    fields = (
        'user',
        'bot',
        'situation_list',
    )
    readonly_fields = ('last_update',)
    ordering = ('-last_update',)

admin.site.register(Bot, BotAdmin)
admin.site.register(BotTransaction, BotTransactionAdmin)
admin.site.register(BotSituation, BotSituationAdmin)
