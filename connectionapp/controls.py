from binance.client import Client
from binance.exceptions import BinanceAPIException
from decimal import Decimal
from .models import Api

# Binance API'den hesap bilgilerini alır ve toplam USDT bakiyesini döndürür
def get_binance_balance(api_address, secret_key):
    try:
        # Initialize Binance client
        client = Client(api_address, secret_key)
        
        # Get account information
        account_info = client.get_account()
        
        # Filter assets with significant balance (>0.01)
        significant_assets = [
            asset for asset in account_info['balances']
            if float(asset['free']) + float(asset['locked']) > 0.01
        ]
        
        # Get all prices at once
        all_tickers = {
            ticker['symbol']: Decimal(ticker['price'])
            for ticker in client.get_symbol_ticker()
            if ticker['symbol'].endswith('USDT')
        }
        
        # Calculate total USDT balance
        total_balance = Decimal('0')
        for asset in significant_assets:
            asset_total = Decimal(asset['free']) + Decimal(asset['locked'])
            
            if asset['asset'] == 'USDT':
                total_balance += asset_total
            else:
                symbol = f"{asset['asset']}USDT"
                if symbol in all_tickers:
                    total_balance += asset_total * all_tickers[symbol]

        return total_balance, "success"

    except BinanceAPIException as e:
        return False , "Invalid API-key, IP, or permissions for action."

    except Exception as e:
        return False , "Please try again later."


def check_balance_accuracy(request, estimated_balance):
    apis = Api.objects.filter(user=request.user)
    for api in apis:
        balance, message = get_binance_balance(api.adress, api.secretkey)
        if balance:
            # Calculate the percentage difference
            difference = abs(balance - Decimal(estimated_balance))

            percentage_diff = (difference / Decimal(estimated_balance)) * 100
            print(percentage_diff)
            if percentage_diff >= 0.5:
                return False
    return True


def control_api(request, api_address, secret_key, estimated_balance):
    balance, message = get_binance_balance(api_address, secret_key)
    if balance:
        # Calculate the percentage difference
        difference = abs(balance - Decimal(estimated_balance))
        percentage_diff = (difference / Decimal(estimated_balance)) * 100
        if percentage_diff > 0.5:
            return False, "Balance is not accurate!", 0
        else:
            accuracy = check_balance_accuracy(request, estimated_balance)
            if accuracy:
                return True,"", balance
            else:
                return False, "Balance is not same with other API's!", 0

    else:
        return False, message, 0    

