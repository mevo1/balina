from django.shortcuts import render

# Create your views here.
def backtest_page(request):
    return render(request, 'backtestapp/backtest_page.html')
