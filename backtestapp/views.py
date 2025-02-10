import json
import subprocess
from django.shortcuts import render, get_object_or_404
from customizationapp.models import Coins
from strategyapp.models import Strategy
from .models import Backtest, Result
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .main_bt import main

# Create your views here.
def backtest_page(request):
    strategies = Strategy.objects.filter(user=request.user)
    coins = Coins.objects.all()
    return render(request, 'backtestapp/backtest_page.html', {"strategies": strategies,"coins": coins})

def result(request):
    return render(request, 'backtestapp/result_page.html')

def backtest_result(request,id):
    result = Result.objects.get(backtest__id=id, user=request.user)

    return JsonResponse({
        "id": result.id,
        "user": result.user.username,  # User'ın kullanıcı adı
        "strategy": result.strategy.title,  # Strategy'nin adı (varsayılan name alanı)
        "backtest_id": result.backtest.id,  # İlgili Backtest ID'si
        "name": result.name,  # Backtest adı
        "last_margin": result.last_margin,  # Portföy büyüklüğü
        "total_return": result.total_return,  # Toplam kar/zarar
        "process_count": result.process_count,  # İşlem sayısı
        "profit_process_count": result.profit_process_count,  # Karlı işlem sayısı
        "loss_process_count": result.loss_process_count,  # Zararlı işlem sayısı
        "success_rate": result.success_rate,  # Başarı oranı
        "profit_graph": result.profit_graph,  # Kâr grafiği (JSON formatında)
        "stock_graph": result.stock_graph,  # Hisse grafiği (JSON formatında)
        "process_list": result.process_list,  # Hisse grafiği (JSON formatında)
    })

def backtest_list(request):
    backtests = Backtest.objects.filter(user=request.user).values()
    return JsonResponse(list(backtests), safe=False)

@csrf_exempt
def backtest_add(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            strategy_id = data.get("strategy_id")
            coin_list = data.get("coin_list")
            interval = data.get("interval")
            period = data.get("period")
            first_margin = data.get("first_margin")
            commission = data.get("commission")
            moving_tp = data.get("moving_tp")
            moving_sl = data.get("moving_sl")

            if Backtest.objects.filter(name=name, user_id=request.user.id).exists():
                return JsonResponse({"message": "There is a backtest with the same name!", "info": "warning"})

            if not name or not coin_list or not first_margin or not commission or not interval or not period:
                return JsonResponse({"message": "Make sure that you have selected everything.", "info": "warning"})

            # Strategy nesnesini alın
            try:
                strategy = Strategy.objects.get(id=strategy_id, user_id=request.user.id)
            except Strategy.DoesNotExist:
                return JsonResponse({"message": "Invalid strategy selected.", "info": "error"})

            # Backtest oluştur
            backtest_instance = Backtest.objects.create(
                name=name,
                strategy_id=strategy,  # Strategy instance burada atanıyor
                coin_list=coin_list,
                interval=interval,
                period=period,
                first_margin=first_margin,
                commission=commission,
                moving_tp=moving_tp,
                moving_sl=moving_sl,
                user=request.user
            )

            runBacktest(backtest_instance, request,strategy,name,strategy.code,coin_list,interval,period,first_margin,commission,moving_tp,moving_sl)

            return JsonResponse({"message": "Backtest has runned.", "info": "success"})
        except Exception as e:
            return JsonResponse({"message": str(e), "info": "error"})

def backtest_view(request,id):
    backtest = get_object_or_404(Backtest, id=id)
    return JsonResponse({
        "name": backtest.name,
        "strategy_id": backtest.strategy_id.id,
        "coin_list": backtest.coin_list,
        "interval": backtest.interval,
        "period": backtest.period,
        "first_margin": backtest.first_margin,
        "commission": backtest.commission,
        "moving_tp": backtest.moving_tp,
        "moving_sl": backtest.moving_sl,
    })

def runBacktest(backtest, request,strategy,name,strategy_code,coin_list,interval,period,first_margin,commission,moving_tp,moving_sl):

    last_margin,total_return,process_count,profit_process_count,loss_process_count,success_rate, stock_graph, profit_graph, process_list = main(strategy_code,coin_list,interval,period,first_margin,commission,moving_tp,moving_sl)

    print(f"Portföy Son Büyüklüğü: {last_margin:.0f} USD")
    print(f"Toplam Kar/Zarar:      {total_return:.0f} USD")
    print(f"Total İşlem Sayısı:    {process_count:.0f} ADET")
    print(f"Karlı İşlem Sayısı:    {profit_process_count:.0f} ADET")
    print(f"Zararlı İşlem Sayısı:  {loss_process_count:.0f} ADET")
    print(f"İşlem Başarı Oranı:    {success_rate:.0f} %")

    print("Profit Graph:")
    #print(profit_graph)

    print("Stock Graph:")
    #print(stock_graph)

    print("Profit List:")
    #print(process_list)

    stock_graph['time'] = stock_graph['time'].fillna(first_margin)
    profit_graph['time'] = profit_graph['time'].fillna(first_margin)
    process_list['time'] = process_list['time'].fillna(first_margin)

    stock_graph['time'] = stock_graph['time'].astype(str)
    profit_graph['time'] = profit_graph['time'].astype(str)
    process_list['time'] = process_list['time'].astype(str)

    # `DataFrame`'leri JSON formatına dönüştür
    stock_graph_json = json.dumps(stock_graph.to_dict(orient='records'))
    profit_graph_json = json.dumps(profit_graph.to_dict(orient='records'))
    process_list_json = json.dumps(process_list.to_dict(orient='records'))

    # Veritabanına kaydet
    Result.objects.create(
        user=request.user,
        name=name,
        strategy=strategy,
        backtest=backtest,
        last_margin=last_margin,
        total_return=total_return,
        process_count=process_count,
        profit_process_count=profit_process_count,
        loss_process_count=loss_process_count,
        success_rate=success_rate,
        stock_graph=stock_graph_json,
        profit_graph=profit_graph_json,
        process_list=process_list_json
    )
