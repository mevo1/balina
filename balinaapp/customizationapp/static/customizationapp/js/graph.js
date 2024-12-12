window.traceList = [];
let main_data;
let indicator_data;

// MAIN DATA
function downloadData(){
    const symbol = document.getElementById('dropdown1').value;
    const period = document.getElementById('dropdown2').value;
    const interval = document.getElementById('dropdown3').value;
    console.log(symbol, interval, period)
    fetch('/customization/api/graph/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ symbol: symbol, interval: interval, period: period })
    })

    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        plot_main_graph(data)
        main_data = data
        //console.log(main_data)
    })       
    .catch(error => {
        alert(`An error occurred: ${error.message}`);
    });

}

// INDICATOR VİSİBLE
function visibleIndicator(id,event,button){
    event.stopPropagation();
    if (button.classList.contains('disabled-btn')){
        hideIndicator(id,event,button)
        return;
    }else{
        button.classList.add('disabled-btn');
    }
    
    fetch(`/customization/api/graph/${id}/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({id})
    })
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        if (data.message && data.info) {
            
            showAlert(data.message, data.info);
        }else{
            // YENİ İNDİKATÖRLERİ DOLDUR
            data.forEach((item) => {
                const exists = traceList.some(trace => trace.name === item.title);
                if (!exists) {
                    const trace = {
                        id: item.id,
                        on_graph: item.on_graph,
                        x: item.time,
                        y: item.series, // Gelen result verisi y eksenine eklenir
                        type: 'scatter',
                        mode: 'lines',
                        name: item.title, // Göstergenin adını belirt
                        line: {
                            color: item.color, // Çizgi rengi
                            width: 1 // Çizgi kalınlığı
                        }
                    };
                    traceList.push(trace);
                    // GRAFİK OLUŞTUR
                    plot_with_indicator()
                }else{
                    showAlert("Already there is plot with same name!", "error");
                }
            }); 
        }       
    })
    .catch(error => {
        alert(`An error occurred: ${error.message}`);
    });
}

// INDICATOR SHOW
function hideIndicator(id,event,button){
    event.stopPropagation();
    button.classList.remove('disabled-btn');
    window.traceList = window.traceList.filter(trace => trace.id !== id);
    plot_with_indicator()
}

function showAlert(message, type = 'info') {
    console.log(message)
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');

    alertMessage.textContent = message;

    alertBox.classList.add("visible"); // Türüne göre sınıf ekle (success, warning, info vb.)
    alertBox.classList.add(type); // Türüne göre sınıf ekle (success, warning, info vb.)

    // 5 saniye sonra otomatik kapat
    setTimeout(() => {
        alertBox.classList.remove('visible'); // Tüm sınıfları kaldır
    }, 5000);
}

function plot_main_graph(data){
    console.log(data);
    
    // Veriyi grafikte kullanmak için formatla
    const trace = {
        id: 0,
        on_graph: true,
        x: data.time, // Zaman ekseni
        open: data.open.map(parseFloat), // Açılış değerleri
        high: data.high.map(parseFloat), // Yüksek değerler
        low: data.low.map(parseFloat), // Düşük değerler
        close: data.close.map(parseFloat), // Kapanış değerleri
        type: 'candlestick',
        name: 'main_graph'
    };
    traceList.push(trace)
    
    const formattedData = traceList[0].x.map((time, index) => [
        time, // Zaman (timestamp)
        traceList[0].open[index], // Açılış
        traceList[0].high[index], // Yüksek
        traceList[0].low[index], // Düşük
        traceList[0].close[index] // Kapanış
    ]);

    // Highcharts ile çizim
    Highcharts.stockChart('chart-container', {
        rangeSelector: {
            selected: 1
        },
        title: {
            text: traceList[0].name
        },
        series: [{
            type: traceList[0].type,
            name: traceList[0].name,
            data: formattedData,
            upColor: 'green',  // Yükseliş mumlarının rengi
            color: 'white',      // Düşüş mumlarının rengi
            lineColor: 'black', // Mumların dış kenar çizgi rengi
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
}

function plot_with_indicator() {
    if (traceList.length === 0) {
        return null;
    } else {
        // Verileri on_graph değerine göre filtrele
        const falseGraphTraces = traceList.filter(trace => !trace.on_graph); // on_graph false olanlar
        const trueGraphTraces = traceList.filter(trace => trace.on_graph); // on_graph true olanlar

        // on_graph false olan traceler için id'ye göre gruplama
        const groupedTraces = falseGraphTraces.reduce((acc, trace) => {
            if (!acc[trace.id]) acc[trace.id] = [];
            acc[trace.id].push(trace);
            return acc;
        }, {});

        // Highcharts için grafik düzenini temizle
        const container = document.getElementById('chart-container');
        container.innerHTML = '';

        // Highcharts grafik referanslarını tutacak dizi
        const charts = [];

        // trueGraphTraces için ana grafik oluştur
        const mainChart = document.createElement('div');
        mainChart.id = 'main-chart';
        container.appendChild(mainChart);

        const mainChartInstance = Highcharts.stockChart('main-chart', {
            chart: {
                events: {
                    selection: function (event) {
                        if (event.xAxis) {
                            const min = event.xAxis[0].min;
                            const max = event.xAxis[0].max;

                            // Diğer grafiklerde zoom'u senkronize et
                            charts.forEach(chart => {
                                if (chart !== this) {
                                    chart.xAxis[0].setExtremes(min, max, true, false);
                                }
                            });
                        }
                        return false; // Default zoom davranışını devre dışı bırak
                    }
                }
            },
            title: { text: 'Main Graph' },
            series: trueGraphTraces.map(trace => {
                if (trace.type === 'candlestick') {
                    return {
                        type: 'candlestick',
                        name: trace.name,
                        data: trace.x.map((time, index) => [
                            new Date(time).getTime(),
                            trace.open[index],
                            trace.high[index],
                            trace.low[index],
                            trace.close[index]
                        ])
                    };
                } else {
                    return {
                        type: 'line',
                        name: trace.name,
                        data: trace.x.map((time, index) => [
                            new Date(time).getTime(),
                            trace.y[index]
                        ]),
                        color: trace.line?.color || '#000000',
                        lineWidth: trace.line?.width || 1
                    };
                }
            })
        });

        charts.push(mainChartInstance);

        // falseGraphTraces için alt grafikler oluştur
        Object.values(groupedTraces).forEach((traceGroup, index) => {
            const subChart = document.createElement('div');
            subChart.id = `sub-chart-${index + 1}`;
            container.appendChild(subChart);

            const subChartInstance = Highcharts.chart(`sub-chart-${index + 1}`, {
                chart: {
                    events: {
                        selection: function (event) {
                            if (event.xAxis) {
                                const min = event.xAxis[0].min;
                                const max = event.xAxis[0].max;

                                // Diğer grafiklerde zoom'u senkronize et
                                charts.forEach(chart => {
                                    if (chart !== this) {
                                        chart.xAxis[0].setExtremes(min, max, true, false);
                                    }
                                });
                            }
                            return false; // Default zoom davranışını devre dışı bırak
                        }
                    }
                },
                title: { text: `Sub Indicator ${index + 1}` },
                series: traceGroup.map(trace => {
                    return {
                        type: 'line',
                        name: trace.name,
                        data: trace.x.map((time, index) => [
                            new Date(time).getTime(),
                            trace.y[index]
                        ]),
                        color: trace.line?.color || '#000000',
                        lineWidth: trace.line?.width || 1
                    };
                })
            });

            charts.push(subChartInstance);
        });

        // Senkronize pan/zoom için Highcharts olay dinleyicileri
        charts.forEach(chart => {
            chart.container.addEventListener('mousemove', function (e) {
                const chartX = chart.pointer.normalize(e).chartX;
                const xAxisValue = chart.xAxis[0].toValue(chartX, true);

                charts.forEach(otherChart => {
                    if (otherChart !== chart) {
                        const xAxis = otherChart.xAxis[0];
                        if (xAxis && xAxis.toPixels) {
                            const otherChartX = xAxis.toPixels(xAxisValue, true);
                            otherChart.pointer.runPointActions({
                                chartX: otherChartX,
                                chartY: e.chartY
                            });
                        }
                    }
                });
            });
        });
    }
}


function remove_graph(){
    traceList = [];
    document.getElementById('chart-container').innerHTML = '';
}
window.remove_graph = remove_graph; // Global