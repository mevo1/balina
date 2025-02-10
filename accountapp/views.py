from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

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