import json
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from customizationapp.models import Coins
from django.views.decorators.csrf import csrf_exempt
from .models import Strategy



# Create your views here.
def strategy_page(request):
    coins = Coins.objects.all()
    return render(request, 'strategyapp/strategy.html', {"coins": coins})

def list_strategy(request):
    strategy = Strategy.objects.filter(user=request.user).values()
    return JsonResponse(list(strategy), safe=False)

@csrf_exempt
def add_strategy(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            title = data.get("title")
            code = data.get("code")

            if not title or not code:
                return JsonResponse({"message": "Title and code are required.","info":"warning"})

            if Strategy.objects.filter(title=title, user_id=request.user.id).exists():
                return JsonResponse({"message": "There is an indicator with the same title!","info":"warning"})
            
            Strategy.objects.create(title=title, code=code, user_id=request.user.id)

            return JsonResponse({"message": "Indicator saved successfully.","info":"success"})
        except Exception as e:
            return JsonResponse({"message": (str(e)),"info":"error"})

@csrf_exempt
def update_strategy(request, id):
    if request.method == "PUT":
        try:
            data = json.loads(request.body)
            title = data.get("title")
            code = data.get("code")

            strategy = get_object_or_404(Strategy, id=id, user=request.user)

            if Strategy.objects.filter(title=title).exclude(id=id).exists():
                return JsonResponse({"message": "There is an indicator with the same title!","info":"warning"})

            if not title or not code:
                return JsonResponse({"message": "Title and code are required.","info":"warning"})

            strategy.title = title
            strategy.code = code
            strategy.save()

            return JsonResponse({"message": "Indicator updated successfully.","info":"success"})
        except Exception as e:
            return JsonResponse({"message": (str(e)),"info":"error"})

def open_strategy(request, id):

    strategy = get_object_or_404(Strategy, id=id)
    return JsonResponse({
        "id": strategy.id,
        "title": strategy.title,
        "code": strategy.code,
    })

def del_strategy(request, id):
    try:
        strategy = get_object_or_404(Strategy, id=id)
        strategy.delete()
        return JsonResponse({"message": "Strategy deleted.","info":"success"})
    except Exception as e:
        return JsonResponse({"message": (str(e)),"info":"errorr"})
    
