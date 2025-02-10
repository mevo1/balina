# database'den veriler
symbolsa = ("BTCUSDT", "ETCUSDT", "DOGEUSDT")
period= "5d"
interval = "1h"

first_margin = 1000

moving_tp = True
moving_sl = True
commission = 0.001


# Kullanının kodunu al.
user_code = """
data['5_MA'] = data['close'].rolling(window=5).mean()
data['10_MA'] = data['close'].rolling(window=10).mean()
data['20_MA'] = data['close'].rolling(window=20).mean()
data['30_MA'] = data['close'].rolling(window=30).mean()
data['50_MA'] = data['close'].rolling(window=50).mean()
data['70_MA'] = data['close'].rolling(window=70).mean()
data['100_MA'] = data['close'].rolling(window=100).mean()
data['200_MA'] = data['close'].rolling(window=200).mean()

data['KarAl'] = 5
data['ZararDur'] = 2
data['Signal'] = 0
data['Signal'] = data['Signal'].astype("float64")
data.loc[data['close'] > data['5_MA'], 'Signal'] = 0.10
data.loc[data['close'] > data['10_MA'], 'Signal'] = 0.20
data.loc[data['close'] > data['20_MA'], 'Signal'] = 0.30
data.loc[data['close'] > data['30_MA'], 'Signal'] = 0.40
data.loc[data['close'] > data['50_MA'], 'Signal'] = 0.50
data.loc[data['close'] > data['70_MA'], 'Signal'] = 0.60
data.loc[data['close'] > data['100_MA'], 'Signal'] = 0.75
data.loc[data['close'] > data['200_MA'], 'Signal'] = 1
"""