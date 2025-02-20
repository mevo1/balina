from django.http import JsonResponse
import json
from decimal import Decimal
from django.db import models
from botingapp.models import Bot, BotTransaction, BotSituation
from connectionapp.models import UserBalance
from strategyapp.models import Strategy
from connectionapp.models import Api

def create_bot(request):
    try:
        data = json.loads(request.body)
        name = data.get("name")
        strategy_id = data.get("strategy_id")
        coin_list = data.get("coin_list")
        interval = data.get("interval")
        first_amount = data.get("first_amount")
        moving_tp = data.get("moving_tp")
        moving_sl = data.get("moving_sl")
        api_id = data.get("api_id")

        if Bot.objects.filter(name=name, user_id=request.user.id).exists():
            return JsonResponse({"message": "Aynı isimde bir bot zaten var!", "info": "warning"})

        if not name or not coin_list or not first_amount or not interval:
            return JsonResponse({"message": "Lütfen tüm alanları seçtiğinizden emin olun.", "info": "warning"})

        user_balance = UserBalance.objects.filter(user=request.user).first()
        if not user_balance:
            return JsonResponse({
                "message": "Kullanıcı bakiyesi bulunamadı!",
                "info": "error"
            })

        existing_total = (Bot.objects.filter(user=request.user)
                        .exclude(name=name)
                        .aggregate(total=models.Sum('last_amount'))['total'] or Decimal('0')).quantize(Decimal('1.'))
        
        requested_amount = existing_total + Decimal(str(first_amount))
        
        if requested_amount > user_balance.balance:
            available_balance = (user_balance.balance - existing_total).quantize(Decimal('1.2'))
            return JsonResponse({
                "message": f"Yetersiz bakiye! Kullanılabilir bakiye: {available_balance}",
                "info": "warning"
            })
        
        try:
            strategy = Strategy.objects.get(id=strategy_id, user_id=request.user.id)
            api = Api.objects.get(id=api_id, user_id=request.user.id)
        except Strategy.DoesNotExist:
            return JsonResponse({"message": "Geçersiz strateji seçimi.", "info": "error"})

        bot_instance = Bot.objects.create(
            name=name,
            strategy_id=strategy,
            coin_list=coin_list,
            interval=interval,
            first_amount=first_amount,
            last_amount=first_amount,
            month_first_amount=first_amount,
            week_first_amount=first_amount,
            day_first_amount=first_amount,
            moving_tp=moving_tp,
            moving_sl=moving_sl,
            user=request.user,
            api_id=api,
        )

        initial_situation = [{
            "code": "USD",
            "amount": float(first_amount),
            "piece": float(first_amount)
        }]
        situation_list = json.dumps(initial_situation)

        BotSituation.objects.create(
            user=request.user,
            bot_id=bot_instance.id,
            situation_list=situation_list
        )

        return JsonResponse({"message": "Bot saved. Ready to make money!", "info": "success"})
    except Exception as e:


        return JsonResponse({"message": str(e), "info": "error"}) 