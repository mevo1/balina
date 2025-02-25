import yfinance as yf
import pandas as pd
from datetime import datetime
from .position_operate import sum_position, position_filter
from .position_change_list import *
from .procedure import *
from .stops_bt import *
from .moving_bt import *
from .result import *
from .get_binance_data import get_binance_data
from .pull_data_bt import symbolsa, period, interval, moving_tp, moving_sl, commission, user_code, first_margin
pd.set_option('display.max_rows', None)
pd.set_option('display.max_columns', None)

# data baseden veri çekme

def strategy(data,strategy_code):
    exec(strategy_code)
    return data

def main(strategy_code,symbols,interval,period,first_margin,commission,moving_tp,moving_sl):

    commission = float(commission)
    first_margin = int(first_margin)
    symbols = tuple(symbols)
    # Verileri saklamak için dictionary
    data_dict = {}
    backtest_dict = {}
    ticker_list = list(symbols)
    
    for symbol in symbols: # indirme ve kodu çalıştırma işlemleri
        # Veri indirme
        data_dict[symbol] = get_binance_data(symbol, interval, period)

        if data_dict[symbol] is None or data_dict[symbol].empty:
            raise ValueError(f"The data for symbol '{symbol}' is empty or not available. Please check the input parameters.")

        # Strateji uygulama
        backtest_dict[symbol] = strategy(data_dict[symbol],strategy_code)

        # Backtest hesaplamaları
        backtest_dict[symbol]['Position'] = backtest_dict[symbol]['Signal'].shift()

    row_count = len(next(iter(backtest_dict.values())))

    sum_pos_result = sum_position(backtest_dict, row_count)  # position_operate

    filted_sum_position = position_filter(sum_pos_result)  # position_operate

    position_changes_list = position_change_list(backtest_dict,row_count)
    
    merged_df1 = pd.concat(
        [backtest_dict[ticker]["Position"].rename(ticker) for ticker in ticker_list], 
        axis=1,
        sort=False
    )

    #print(merged_df1)

    i = 0
    while i < len(filted_sum_position["sum_position"]) - 1:
        if filted_sum_position["sum_position"].iloc[i] == 0:
            i += 1
            continue
        else:
            try:
                backtest_dict, i = procedure(backtest_dict, position_changes_list, i)
            except KeyError as e:
                print(f"KeyError: {e} - Possible issue with the ticker or date.")
                break
            except IndexError as e:
                print(f"IndexError: {e} - Index out of range for ticker list or position list.")
                break
            except Exception as e:
                print(f"An unexpected error occurred: {e}")
                break
    
    merged_df2 = pd.concat(
        [backtest_dict[ticker]["Position"].rename(ticker) for ticker in ticker_list], 
        axis=1,
        sort=False
    )

    merged_df = pd.concat([merged_df1, merged_df2], axis=1)

    totals = 0
    for symbol in symbols:
        backtest_dict[symbol]['Returns'] = backtest_dict[symbol]['open'].pct_change()
        backtest_dict[symbol]['Strategy_Returns'] = (backtest_dict[symbol]['Position'].fillna(0) * backtest_dict[symbol]['Returns'].fillna(0)) - (commission * abs(backtest_dict[symbol]['Position'].diff()))
        
        # ilk alım noktalarını belirlemek için gruplandırma yap.
        backtest_dict[symbol]["Dependency"] = backtest_dict[symbol]["Position"].fillna(0) != 0
        backtest_dict[symbol]["Group"] = (backtest_dict[symbol]["Dependency"] != backtest_dict[symbol]["Dependency"].shift()).cumsum() * backtest_dict[symbol]["Dependency"]

        # Tp / Sl
        if "KarAl" in backtest_dict[symbol].columns or "ZararDur" in backtest_dict[symbol].columns:
            if moving_sl == True and "ZararDur" not in backtest_dict[symbol].columns or moving_tp == True and "KarAl" not in backtest_dict[symbol].columns:
                if moving_sl == True and "ZararDur" not in backtest_dict[symbol].columns:
                    print("Zarar durdur değeri yok")
                if moving_tp == True and "KarAl" not in backtest_dict[symbol].columns:
                    print("Kar al değeri yok")
            # Code
            else:
                backtest_dict[symbol] = main_moving(backtest_dict[symbol], moving_tp, moving_sl)

        backtest_dict[symbol]['Position'] = backtest_dict[symbol]['Position'].fillna(0)
        backtest_dict[symbol]['Strategy_Returns'] = (backtest_dict[symbol]['Position'] * backtest_dict[symbol]['Returns']) - (commission * abs(backtest_dict[symbol]['Position'].diff()))
        
        backtest_dict[symbol]['Total_Returns'] = (1+ backtest_dict[symbol]['Strategy_Returns']).cumprod()

        #total_return = (1+ backtest_dict[symbol]['Strategy_Returns']).cumprod().iloc[-1]

        #totals = totals + total_return

        #print(symbol, "Getiri:", total_return)
    
    last_margin,total_return,process_count,profit_process_count,loss_process_count,success_rate, stock_graph, profit_graph, process_list = result(backtest_dict,symbols,first_margin)
    
    #print(profit_graph)
    return last_margin,total_return,process_count,profit_process_count,loss_process_count,success_rate, stock_graph, profit_graph, process_list
