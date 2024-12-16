from binance.client import Client
from binance.exceptions import BinanceAPIException, BinanceRequestException
import time

def check_total_balance(api_key, secret_key, control_value):
    # Binance Client oluşturma
    client = Client(api_key, secret_key)

    # Sunucu saat farkını senkronize etme
    """try:
        server_time = client.get_server_time()["serverTime"]
        local_time = int(time.time() * 1000)
        time_diff = server_time - local_time
        client.TIME_OFFSET = time_diff  # Binance client için zaman farkını ayarla
    except Exception as e:
        print("Sunucu saat farkı alınamadı:", e)
        time_diff = 0
"""
    try:
        # Hesap bilgilerini al
        account_info = client.get_account()

        # Bakiyeleri filtrele ve işleme hazırla
        balances = account_info.get("balances", [])
        filtered_balances = [
            {"asset": b["asset"], "free": float(b["free"])}
            for b in balances
            if float(b["free"]) > 0  # Sadece pozitif bakiyeleri al
        ]

        # Döviz kurunu almak için Binance fiyatlarını çek
        prices = client.get_all_tickers()
        price_dict = {item["symbol"]: float(item["price"]) for item in prices}

        # Toplam bakiyeyi dolar olarak hesapla
        total_balance_usd = 0
        for balance in filtered_balances:
            asset = balance["asset"]
            amount = balance["free"]
            if asset == "USDT":
                total_balance_usd += amount
            elif f"{asset}USDT" in price_dict:
                total_balance_usd += amount * price_dict[f"{asset}USDT"]

        # Tahmini kontrol et
        if abs(control_value - total_balance_usd) < 1.0:  # 1 USD tolerans
            return "Tebrikler! Doğru"
        else:
            return f"Yanlış tahmin. Gerçek toplam bakiye: {total_balance_usd:.2f} USD"

    except BinanceAPIException as e:
        # API anahtarlarının geçersiz olduğu durum
        return f"Binance API hatası: {e}"
    except BinanceRequestException as e:
        # Ağ veya bağlantı hatası
        return f"Binance İstek Hatası: {e}"
    except Exception as e:
        # Diğer hatalar
        return f"Bir hata oluştu: {e}"
    """_sayfasız kullanım_
    # Örnek kullanım
    if __name__ == "__main__":
    api_key = "KULLANICIDAN_ALINAN_API_KEY"
    secret_key = "KULLANICIDAN_ALINAN_SECRET_KEY"
    control_value = float(input("Lütfen toplam bakiyenizi (USD olarak) tahmin edin: "))
    result = check_total_balance(api_key, secret_key, control_value)
    print(result)

    """

