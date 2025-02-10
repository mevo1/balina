from django.contrib import admin
from .models import UserBalance, Api

@admin.register(UserBalance)
class UserBalanceAdmin(admin.ModelAdmin):
    list_display = ('user', 'balance', 'last_updated')
    list_filter = ('last_updated',)
    search_fields = ('user__username',)
    readonly_fields = ('last_updated',)

class ApiAdmin(admin.ModelAdmin):
    list_display = ("name","secretkey","adress")
    search_fields = ("name",)
    #readonly_fields = ("api_adress","api_secretkey",)

# Register your models here.
admin.site.register(Api, ApiAdmin)
