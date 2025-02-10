import pandas as pd
import numpy as np

def result(df,symbols,first_margin):
    last_margin = last_margin_fonks(df,symbols,first_margin)
    total_return = total_return_fonks(last_margin,first_margin)
    process_count = process_count_fonks(df,symbols)
    profit_process_count = profit_process_count_fonks(df,symbols)
    loss_process_count = loss_process_count_fonks(process_count,profit_process_count)
    success_rate = success_rate_fonks(profit_process_count,loss_process_count)

    stock_graph = stock_graph_fonks(df,symbols,first_margin)
    profit_graph = profit_graph_fonks(df,symbols,first_margin)

    process_list = process_list_fonks(df,symbols)

    return last_margin, total_return, process_count, profit_process_count, loss_process_count, success_rate, stock_graph, profit_graph, process_list

    printer(last_margin,total_return,process_count,profit_process_count,loss_process_count,success_rate,profit_graph,stock_graph)


def last_margin_fonks(df,symbols,first_margin):
    totals = 0
    for symbol in symbols:
        total_return = df[symbol]['Total_Returns'].iloc[-1]
        totals = totals + total_return
    totals = totals/len(symbols)
    return first_margin * totals

def total_return_fonks(last_margin,first_margin):
    return last_margin - first_margin

def process_count_fonks(df,symbols):
    count = 0
    for symbol in symbols:
        count = count + (df[symbol]["Group"].max())/2
    return count

def profit_process_count_fonks(df,symbols):
    count = 0
    for symbol in symbols:
        df[symbol]["Last_Deger"] = ((df[symbol]["Position"] == 0) & (df[symbol]["Position"].shift(1) !=0)).shift(-1)
        df[symbol].loc[df[symbol].index[-1],"Last_Deger"] = df[symbol]["Position"].iloc[-1] != 0

        count += df[symbol][(df[symbol]['Last_Deger'] == True) & (df[symbol]['Cumprod'] > 1)].shape[0]

    return count

def loss_process_count_fonks(process_count,profit_process_count):
    return process_count - profit_process_count

def success_rate_fonks(profit_process_count,loss_process_count):
    if profit_process_count==0 or loss_process_count==0:
        return 0
    return profit_process_count/(loss_process_count+profit_process_count)*100

import pandas as pd

def profit_graph_fonks(df, symbols, first_margin):
    if not symbols:
        raise ValueError("Symbols list is empty. Please provide at least one symbol.")

    # İlk sembolün time sütununu al
    time_column = df[symbols[0]]['time']

    # Totals için başlangıç değeri
    totals = pd.Series(0, index=df[symbols[0]].index)

    # Her sembolün 'Total_Returns' değerini toplama
    for symbol in symbols:
        if 'Total_Returns' not in df[symbol]:
            raise KeyError(f"'Total_Returns' column is missing in the data for symbol {symbol}.")
        totals += df[symbol]['Total_Returns']

    # Ortalama getiriyi hesaplama
    totals = totals / len(symbols)

    # İlk margin ile çarpma
    totals = first_margin * totals

    # DataFrame oluşturma ve time sütununu ekleme
    profit_graph = pd.DataFrame({
        "time": time_column,
        "profit_graph": totals
    }, index=totals.index)

    return profit_graph

def stock_graph_fonks(df, symbols, first_margin):
    
    if not symbols:
        raise ValueError("Symbols list is empty. Please provide at least one symbol.")

    # İlk sembolün time sütununu al
    time_column = df[symbols[0]]['time']

    # Totals için başlangıç değeri
    totals = pd.Series(0, index=df[symbols[0]].index)

    for symbol in symbols:
        if 'Returns' not in df[symbol]:
            raise KeyError(f"'Returns' column is missing in the data for symbol {symbol}.")
        totals += df[symbol]['Returns']

    totals = totals / len(symbols)
    totals = (1 + totals).cumprod()
    totals = first_margin * totals

    stock_graph = pd.DataFrame({
        "time": time_column,
        "stock_graph": totals
    }, index=totals.index)

    return stock_graph


def process_list_fonks(df, symbols):
    # İlk sembolün 'time' sütununu al
    time_column = df[symbols[0]]['time'].reset_index(drop=True)
    
    # Boş bir DataFrame oluştur
    combined_positions = pd.DataFrame()
    
    for symbol in symbols:
        # Her bir symbol'ün 'Position' sütununu ekle
        combined_positions[symbol] = df[symbol]["Position"].reset_index(drop=True)
    
    # 'time' sütununu bir DataFrame olarak ekle
    combined_positions.insert(0, 'time', time_column)
    
    return combined_positions

def printer(last_margin,total_return,process_count,profit_process_count,loss_process_count,success_rate,profit_graph,stock_graph):
    print(f"Portföy Son Büyüklüğü: {last_margin:.0f} USD")
    print(f"Toplam Kar/Zarar:      {total_return:.0f} USD")
    print(f"Total İşlem Sayısı:    {process_count:.0f} ADET")
    print(f"Karlı İşlem Sayısı:    {profit_process_count:.0f} ADET")
    print(f"Zararlı İşlem Sayısı:  {loss_process_count:.0f} ADET")
    print(f"İşlem Başarı Oranı:    {success_rate:.0f} %")

    print("Profit Graph:")
    print(profit_graph)

    print("Stock Graph:")
    #print(stock_graph)

