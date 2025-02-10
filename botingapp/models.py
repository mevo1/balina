from django.db import models
from django.contrib.auth.models import User
from strategyapp.models import Strategy
from customizationapp.models import Coins
from django.core.exceptions import ValidationError
import json
from connectionapp.models import Api

# Create your models here.
class Bot(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='botingapp_bots')
    name = models.CharField(max_length=100, unique=True)
    strategy_id = models.ForeignKey(Strategy, on_delete=models.CASCADE, related_name='botingapp_bots')
    coin_list = models.TextField()
    interval = models.CharField(max_length=100)
    first_amount = models.DecimalField(max_digits=20, decimal_places=8, default=0)
    day_first_amount = models.DecimalField(max_digits=20, decimal_places=8, default=0)
    week_first_amount = models.DecimalField(max_digits=20, decimal_places=8, default=0)
    month_first_amount = models.DecimalField(max_digits=20, decimal_places=8, default=0)
    last_amount = models.DecimalField(max_digits=20, decimal_places=8, default=0)
    moving_tp = models.BooleanField(default=False)
    moving_sl = models.BooleanField(default=False)
    api_id = models.ForeignKey(Api, on_delete=models.CASCADE, related_name='botingapp_bots')

    def __str__(self):
        return f"{self.name} (User: {self.user.username})"

    def clean(self):
        try:
            json.loads(self.coin_list)
        except json.JSONDecodeError:
            raise ValidationError("Coin listesi geçerli bir JSON formatında olmalıdır.")

    class Meta:
        verbose_name = "Bot"
        verbose_name_plural = "Bots"
        ordering = ["-id"]  # Varsayılan sıralama eklendi (en son eklenen en üstte)


class BotTransaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bot_transactions')
    bot = models.ForeignKey(Bot, on_delete=models.CASCADE, related_name='transactions')
    asset = models.ForeignKey(Coins, on_delete=models.CASCADE, related_name='bot_transactions')
    amount = models.DecimalField(max_digits=20, decimal_places=8)
    piece = models.DecimalField(max_digits=20, decimal_places=8)
    transaction = models.BooleanField(help_text="True for Buy, False for Sell")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        transaction_type = "Buy" if self.transaction else "Sell"
        return f"{transaction_type} - {self.asset.symbol} - {self.date}"

    class Meta:
        verbose_name = "Bot Transaction"
        verbose_name_plural = "Bot Transactions"
        ordering = ["-date"]


class BotSituation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bot_situations')
    bot = models.ForeignKey(Bot, on_delete=models.CASCADE, related_name='situations')
    situation_list = models.TextField(help_text="JSON formatında bot mevduat listesi")
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.bot.name} situation - {self.last_update}"

    def clean(self):
        try:
            json.loads(self.situation_list)
        except json.JSONDecodeError:
            raise ValidationError("Must be a valid JSON format.")

    class Meta:
        verbose_name = "Bot Situation"
        verbose_name_plural = "Bot Situations"
        ordering = ["-last_update"]

