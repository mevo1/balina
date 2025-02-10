import json
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Bot, BotTransaction, BotSituation
from connectionapp.models import Api
from customizationapp.models import Coins
from django.views.decorators.csrf import csrf_exempt
from strategyapp.models import Strategy
from .view_file.bot_operations import create_bot

def boting_page(request):
    strategies = Strategy.objects.filter(user=request.user)
    coins = Coins.objects.all()
    apis = Api.objects.filter(user=request.user)
    return render(request, 'botingapp/boting_page.html', {"strategies": strategies, "coins": coins, "apis": apis})

def bot_list(request):
    bots = Bot.objects.filter(user=request.user).values()
    return JsonResponse(list(bots), safe=False)

@csrf_exempt
def bot_add(request):
    if request.method == "POST":
        return create_bot(request)

def bot_view(request,id):
    bot = get_object_or_404(Bot, id=id)
    return JsonResponse({
        "name": bot.name,
        "strategy_id": bot.strategy_id.id,
        "coin_list": bot.coin_list,
        "interval": bot.interval,
        "first_amount": bot.first_amount,
        "moving_tp": bot.moving_tp,
        "moving_sl": bot.moving_sl,
        "api_id": bot.api_id.id
    })

def bot_analyze(request,id):
    bot = get_object_or_404(Bot, user=request.user, id=id)
    bot_transaction = BotTransaction.objects.filter(user=request.user, bot_id=id)
    # Get coin name from asset_id
    for transaction in bot_transaction:
        coin = Coins.objects.get(id=transaction.asset_id)
        transaction.asset_id = coin.name

    bot_situation = get_object_or_404(BotSituation, user=request.user, bot_id=id)
    # Parse the JSON string to Python list
    situation_list = json.loads(bot_situation.situation_list)
    bot_profit = get_object_or_404(Bot, user=request.user, id=id)

    return render(request, 'botingapp/analyze_page.html', {
        "bot_transaction": bot_transaction, 
        "bot_situation": situation_list,
        "bot_profit": bot_profit,
        "bot": bot
    })

def bot_remove(request,id):
    bot = get_object_or_404(Bot, user=request.user, id=id)
    bot.delete()
    return JsonResponse({"message": "Bot başarıyla silindi", "info": "success"})
