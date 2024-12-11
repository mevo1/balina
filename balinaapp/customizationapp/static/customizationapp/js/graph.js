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
    // Grafik düzeni
    const layout = {
                        title: null,

                        xaxis: {
                            title: null,
                            rangeslider: { visible: false } // Rangeslider gizle
                        },
                    
                        yaxis: {
                            title: null,
                            autorange: true,
                            fixedrange: false
                        },
                    
                        plot_bgcolor: "white",
                        paper_bgcolor: "white",
                        font: { color: "black" },
                        height: 480,
                        margin: { t: 10, b: 60, r: 30, l: 60 },
                        dragmode: false, // Varsayılan olarak çizim modu kapalı
                        newshape: {
                        
                            line: {
                                color: 'blue', // Çizilen çizgilerin rengi
                                width: 2 // Çizilen çizgilerin kalınlığı
                            }
                        
                        }
                    };

    // Konfigürasyon ayarları
    const config = {
                    modeBarButtonsToAdd: [
                        {
                            name: 'Çizgi Çizme Modu',
                            icon: Plotly.Icons.pencil, // Sol üstte gösterilecek ikon
                            click: function(gd) {
                                // Çizgi çizme modunu aktif/pasif yap
                                let currentMode = gd._fullLayout.dragmode;
                                Plotly.relayout(gd, { dragmode: currentMode === 'drawline' ? false : 'drawline' });
                            }
                        },
                        {
                            name: 'Çizgileri Kaldır',
                            icon: Plotly.Icons.trash, // Çöp kutusu ikonu
                            click: function(gd) {
                                // Çizgileri kaldır
                                Plotly.relayout(gd, { shapes: [] });
                            }
                        }
                    ],
                    modeBarButtonsToRemove: ["select2d", "lasso2d"],
                    scrollZoom: true, // Scroll zoom'u aktif et
                    displayModeBar: true, // Mod çubuğunu göster
                    responsive: true
                }; 

    // Grafiği oluştur ve container'a ekle
    Plotly.newPlot('chart-container', [trace], layout, config);
}

function plot_with_indicator(){
    if (traceList.length === 0) {
        return null
    }else{
            // on_graph değerine göre verileri filtrele
        const falseGraphTraces = traceList.filter(trace => !trace.on_graph); // on_graph false olanlar
        const trueGraphTraces = traceList.filter(trace => trace.on_graph); // on_graph true olanlar
        
        // on_graph false olan traceler için id'ye göre gruplama
        const groupedTraces = falseGraphTraces.reduce((acc, trace) => {
            if (!acc[trace.id]) acc[trace.id] = [];
            acc[trace.id].push(trace);
            return acc;
        }, {});

        // Layout için row sayısını belirle
        const rowCount = Object.keys(groupedTraces).length + 1; // Gruplar + en üstteki false traceler için

        // Layout ayarlarını oluştur
        const layout = {
            grid: { rows: rowCount, columns: 1, pattern: 'independent' },
            height: 480 * rowCount, // Her satır için yüksekliği ayarlayın
            title: 'Multi-Row Subplots'
        };

        // Figure data'sını oluştur
        const figureData = [];

        // on_graph true olanları ilk subplot'a ekle
        trueGraphTraces.forEach(trace => {
            figureData.push({
                ...trace,
                xaxis: 'x1' , // İlk subplot için x
                yaxis: 'y1' , // İlk subplot için y
                xaxis: {
                    ...trace.xaxis, // Mevcut xaxis özelliklerini korur
                    rangeslider: { visible: false } // rangeslider özelliğini ekler
                } 
            });
        });

        // on_graph true olanları farklı subplotlara ekle
        let rowIndex = 2; // İlk satır trueGraphTraces için ayrıldığı için 2'den başlıyoruz
        Object.values(groupedTraces).forEach(traceGroup => {
            traceGroup.forEach(trace => {
                figureData.push({
                    ...trace,
                    xaxis: `x${rowIndex}`,
                    yaxis: `y${rowIndex}`
                });
            });
            rowIndex++;
        });

        // Grafiği çiz
        Plotly.newPlot('chart-container', figureData, layout);
    }
    
}

function remove_graph(){
    traceList = [];
    document.getElementById('chart-container').innerHTML = '';
}
window.remove_graph = remove_graph; // Global