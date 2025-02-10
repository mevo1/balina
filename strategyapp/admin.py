from django.contrib import admin

# Register your models here.
from .models import Strategy

class StrategyAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'candles')
    search_fields = ('title', 'user__username')
    list_filter = ('user', 'candles')
    fields = (
        'user',
        'title',
        'code',
        'candles'
    )
    ordering = ('-id',)

admin.site.register(Strategy, StrategyAdmin)

