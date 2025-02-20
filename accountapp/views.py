from django.http.response import HttpResponse
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from botingapp.models import Bot
from strategyapp.models import Strategy

from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({"message": f"Merhaba {request.user.username}, bu sayfa korumalı!"})

# NEXT.JS
def hero_infos(request):
    user_count = User.objects.count()  # Kullanıcı sayısını al
    trader_count = Bot.objects.values("user").distinct().count()
    strategy_count = Strategy.objects.count()
    bot_count = Bot.objects.count()
    return JsonResponse({
        'user_count': user_count,
        'trader_count': trader_count,
        'strategy_count': strategy_count,
        'bot_count': bot_count,
    })  # JSON olarak döndür


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            user = authenticate(username=username, password=password)

            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    "message": "Giriş başarılı",
                    "access_token": str(refresh.access_token),
                    "refresh_token": str(refresh),
                    "user": {
                        "id": user.id,
                        "username": user.username,
                        "email": user.email
                    }
                }, status=status.HTTP_200_OK)

            return Response(
                {"message": "Geçersiz kullanıcı adı veya şifre!"}, 
                status=status.HTTP_401_UNAUTHORIZED
            )

        return Response(
            {"message": "Geçersiz giriş verisi!", "errors": serializer.errors}, 
            status=status.HTTP_400_BAD_REQUEST
        )
    


# Create your views here.
def index(request):
    return render(request, "accountapp/intropage.html")

def login_request(request):
    if request.user.is_authenticated:
        return redirect("intro-page")

    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home/profile")
        else:
            return render(request, "accountapp/loginpage.html", {
                "error": "Kullanıcı adı veya parola yanlış!"
            })
    return render(request, "accountapp/loginpage.html")

def register_request(request):
    if request.user.is_authenticated:
        return redirect("intro-page")

    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        firstname = request.POST["firstname"]
        lastname = request.POST["lastname"]
        password = request.POST["password"]
        repassword = request.POST["repassword"]

        if password == repassword:
            if User.objects.filter(username=username).exists():
                return render(request, "accountapp/registerpage.html",{
                "error": "Kullanıcı adı zaten mevcut!",
                "username":username,
                "email":email,
                "firstname":firstname,
                "lastname":lastname,
                })
            else:
                if User.objects.filter(email=email).exists():
                    return render(request, "accountapp/registerpage.html",{
                    "error": "E-mail başkası tarafından kullanılıyor!",
                    "username":username,
                    "email":email,
                    "firstname":firstname,
                    "lastname":lastname,
                    })
                else:
                    user = User.objects.create_user(username=username,email=email,first_name=firstname,last_name=lastname,password=password)
                    user.save()
                    return redirect("login")
                
        else:
            return render(request, "accountapp/registerpage.html",{
                "error": "Parolalar eşleşmiyor!",
                "username":username,
                "email":email,
                "firstname":firstname,
                "lastname":lastname,
            })

    return render(request, "accountapp/registerpage.html")

def logout_request(request):
    logout(request)
    return redirect("intro-page")

def intropage(request):
    return render(request, 'accountapp/intropage.html')

def how_to_use(request):
    return render(request, 'accountapp/how_to_use.html')

def premium(request):
    return render(request, 'accountapp/premium.html')

def about(request):
    return render(request, 'accountapp/about.html')

def deneme(request):
    return render(request, 'accountapp/deneme.html')

def sift(request):
    return render(request, 'sift.html')

def botting(request):
    return render(request, 'botting.html')

def api(request):
    return render(request, 'api.html')

def buysell(request):
    return render(request, 'buysell.html')

def community(request):
    return render(request, 'community.html')