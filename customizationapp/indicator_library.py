import pandas as pd
import numpy as np
from django.http import JsonResponse

def plot(plot_data, indicator, time, series, title, color):
    # Veriyi bir DataFrame'e dönüştür ve temizle
    df = pd.DataFrame({"time": time, "series": series})
    df = df.replace([np.inf, -np.inf], None)
    df = df.dropna()
    
    series = df["series"]
    time = df["time"]
    
    # Yeni veriyi bir sözlük olarak oluştur
    new_data = {
        "id": indicator.id,  # Fonksiyondaki id'yi burada kullanıyorum
        "on_graph": indicator.on_graph,
        "title": title,
        "series": series.tolist(),
        "time": time.dt.strftime("%Y-%m-%d %H:%M:%S").tolist(),
        "color": color,
    }
    
    # Veriyi plot_data'ya ekle
    plot_data.append(new_data)
    
    return plot_data




