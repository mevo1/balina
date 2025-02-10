import json
import asyncio
import websockets
from channels.generic.websocket import AsyncWebsocketConsumer

class BinanceConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        self.loop = asyncio.get_running_loop()
        self.loop.create_task(self.binance_stream())

    async def binance_stream(self):
        # Takip etmek istediğiniz coin çiftlerini buraya ekleyin
        symbols = ["btcusdt", "ethusdt", "bnbusdt", "adausdt", "dogeusdt"]
        # Websocket stream URL'sini birden fazla sembol için oluşturma
        streams = [f"{symbol}@trade" for symbol in symbols]
        url = f"wss://stream.binance.com:9443/stream?streams={'/'.join(streams)}"
        
        async with websockets.connect(url) as websocket:
            while True:
                data = await websocket.recv()
                json_data = json.loads(data)
                
                # Veri yapısı değiştiği için parse etme şeklini güncelleme
                stream_data = json_data['data']
                symbol = stream_data['s'].lower()  # Sembol adı
                price = stream_data['p']  # Anlık fiyat
                
                await self.send(text_data=json.dumps({
                    "symbol": symbol,
                    "price": price
                }))

    async def disconnect(self, close_code):
        print("WebSocket bağlantısı kapandı.")