from django.db import models
from django.contrib.auth.models import User
from strategyapp.models import Strategy
from django.core.exceptions import ValidationError
import json

# Create your models here.
class Backtest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    strategy_id = models.ForeignKey(Strategy, on_delete=models.CASCADE)
    coin_list = models.TextField()
    interval = models.CharField(max_length=100)
    period = models.CharField(max_length=100)
    first_margin = models.IntegerField()
    commission = models.FloatField()
    moving_tp = models.BooleanField(default=False)
    moving_sl = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} (User: {self.user.username})"

    class Meta:
        verbose_name = "Backtest"
        verbose_name_plural = "Backtests"
        ordering = ["-id"]  # Varsayılan sıralama eklendi (en son eklenen en üstte)

    def clean(self):
        # Commission değeri 0 ile 1 arasında olmalı
        if not (0 <= self.commission <= 1):
            raise ValidationError("Commission must be between 0 and 1.")

class Result(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    strategy = models.ForeignKey(Strategy, on_delete=models.CASCADE)
    backtest = models.ForeignKey(Backtest, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)  # Backtest adı
    last_margin = models.FloatField()  # Portföy büyüklüğü
    total_return = models.FloatField()  # Toplam kar/zarar
    process_count = models.IntegerField()  # İşlem sayısı
    profit_process_count = models.IntegerField()  # Karlı işlem sayısı
    loss_process_count = models.IntegerField()  # Zararlı işlem sayısı
    success_rate = models.FloatField()  # Başarı oranı
    profit_graph = models.JSONField()  # Kâr grafiği (JSON formatında)
    stock_graph = models.JSONField()  # Hisse grafiği (JSON formatında)
    created_at = models.DateTimeField(auto_now_add=True)  # Oluşturulma tarihi

    def __str__(self):
        return f"Result: {self.name} ({self.strategy})"