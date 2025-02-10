from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render,get_object_or_404
from .models import Api, UserBalance
import json
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .controls import control_api

@login_required
def api_connection(request):
    return render(request, "connectionapp/api_connection.html")

@csrf_exempt
def get_api(request, id):
    api = get_object_or_404(Api, id=id)
    return JsonResponse({
        "name": api.name,
        "address": api.adress,
        "secretkey": api.secretkey,
    })


def list_api(request):
    apis = Api.objects.filter(user=request.user).values()
    return JsonResponse(list(apis), safe=False)

@csrf_exempt
def update_api(request, id):
    if request.method == "PUT":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            adress = data.get("address")
            secretkey = data.get("secretkey")
            totalbalance = data.get("totalbalance")

            api = get_object_or_404(Api, id=id, user=request.user)

            if Api.objects.filter(name=name).exclude(id=id).exists():
                return JsonResponse({"message": "There is an indicator with the same title!","info":"warning"})

            if not name or not adress or not secretkey:
                return JsonResponse({"message": "Title and code are required.","info":"warning"})

            accuracy, api_balance = control_api(request, adress, secretkey, totalbalance)

            if(accuracy):
                Api.objects.update_or_create(
                    id=id,
                    user=request.user,
                    defaults={
                        'name': name,
                        'adress': adress,
                        'secretkey': secretkey
                    }
                )
                UserBalance.objects.update_or_create(
                    user_id=request.user.id,
                    defaults={'balance': api_balance}
                )
            else:
                return JsonResponse({"message": "Balance is not accurate!","info":"warning"})


            return JsonResponse({"message": "Indicator updated successfully.","info":"success"})
        except Exception as e:
            return JsonResponse({"message": (str(e)),"info":"errorr"})


@csrf_exempt
def add_api(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            adress = data.get("adress")
            secretkey = data.get("secretkey")
            totalbalance = data.get("totalbalance")
            if Api.objects.filter(name=name, user_id=request.user.id).exists():
                return JsonResponse({"message": "There is an indicator with the same title!","info":"warning"})

            if Api.objects.filter(adress=adress, user_id=request.user.id).exists():
                return JsonResponse({"message": "There is an indicator with the same address!","info":"warning"})
            
            if not name or not adress or not secretkey:
                return JsonResponse({"message": adress,"info":"warning"})
            if not adress or not secretkey:

                return JsonResponse({"message": "Title and code are required.","info":"warning"})
            
            accuracy, message, api_balance = control_api(request, adress, secretkey, totalbalance)
            if(accuracy):
                Api.objects.create(name=name, adress=adress, secretkey=secretkey, user_id=request.user.id)

                UserBalance.objects.update_or_create(
                    user_id=request.user.id,
                    defaults={'balance': api_balance}
                )
                return JsonResponse({"message": "Indicator saved successfully.","info":"success"})
            else:
                return JsonResponse({"message": message,"info":"warning"})
               

        except Exception as e:
            return JsonResponse({"message": (str(e)),"info":"errorr"})

@csrf_exempt
def delete_api(request, id):
    api = get_object_or_404(Api, id=id, user=request.user)
    api.delete()
    return JsonResponse({"message": "Indicator deleted successfully.","info":"success"})


