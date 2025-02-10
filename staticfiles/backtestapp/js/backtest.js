document.addEventListener("DOMContentLoaded", loadBacktests);
function loadBacktests() {
    fetch("/backtest/api/backtest-list/")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("backtestList");
            list.innerHTML = "";
            data.forEach((backtest, index) => {
                list.innerHTML +=  `
                <li data-id="${backtest.id}">
                    <a>
                        <strong>${index + 1}.</strong> <!-- artan numara -->
                        <i class="fas fa-chart-line"></i> ${backtest.name}
                    </a>
                    <button id="viewBtn-${backtest.id}" class="view-btn" data-id="${backtest.id}" onclick="viewBacktest(${backtest.id})">View</button>
                    <button id="analyzeBtn-${backtest.id}" class="analyze-btn" onclick="analyzeBacktest(${backtest.id})">Analyze</button> 
                </li>`;
            });
        });
}

function saveBacktest() {
    const name = document.getElementById("backtest-name-input").value;

    // Seçili strategy'nin ID'sini almak
    const selectedStrategy = document.querySelector('input[name="strategy"]:checked');
    const strategy_id = selectedStrategy ? selectedStrategy.id : null; // STRATEJİ IDSİ

    if (!strategy_id) {
            console.error("No strategy selected!");
            reject("No strategy selected!");
            return;
    }

    // Seçili coinleri almak
    const selectedCoins = document.querySelectorAll('#coins-form input[type="checkbox"]:checked');
    const coin_list = Array.from(selectedCoins).map(coin => coin.id); // Seçilen coinlerin ID değerleri
    console.log("Selected Coins:", coin_list);

    const interval = document.getElementById('dropdown3').value;
    const period = document.getElementById('dropdown2').value;

    const first_margin = document.getElementById("first-margin").value;
    const commission = document.getElementById("commission").value;

    const moving_tp = document.getElementById("take-profit").checked;
    const moving_sl = document.getElementById("stop-loss").checked;

    const url = "/backtest/api/backtest-add/";
    const method = 'POST';

    fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            body: JSON.stringify({ name, strategy_id, coin_list, interval, period, first_margin, commission, moving_tp, moving_sl })
    })
    .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
    })
    .then(data => {
        showAlert(data.message, data.info);
        loadBacktests();
    })
    .catch(error => {
            alert(`An error occurred: ${error.message}`);
            reject(error); // Hata oluşursa Promise'i reddet
    });
}

function viewBacktest(id) {
    const currentURL = window.location.pathname;

    // Eğer /backtest/result/ sayfasındaysak
    if (currentURL === '/backtest/result/') {
        // Kullanıcıyı /backtest/backtest/ sayfasına yönlendir ve işlemleri tekrar başlat
        window.location.href = `/backtest/backtest/`;
    } else {
        // Eğer /backtest/backtest/ sayfasındaysak mevcut işlemleri gerçekleştir
        fetch(`/backtest/api/backtest-view/${id}/`)
            .then(response => response.json())
            .then(data => {
                resetForm();

                document.getElementById("backtest-name-input").value = data.name;

                // STRATEGY ID        
                const strategyRadio = document.getElementById(data.strategy_id);
                if (strategyRadio) {
                    strategyRadio.checked = true; // Strateji radio butonunu seçili yap
                }

                // COIN LIST
                let coinList = data.coin_list.split(',').map(coin =>
                    coin.replace(/[\[\]']/g, '').trim() // Köşeli parantezleri ve tek tırnakları kaldır
                );
                coinList.forEach(coinSymbol => {
                    const coinCheckbox = document.getElementById(coinSymbol);
                    if (coinCheckbox) {
                        coinCheckbox.checked = true; // Coin checkbox'ını işaretle
                    }
                });

                setSelection("dropdownMenu3", "dropdown3", data.interval, getIntervalReadableValue(data.interval));
                setSelection("dropdownMenu2", "dropdown2", data.period, getPeriodReadableValue(data.period));

                document.getElementById("first-margin").value = data.first_margin;
                document.getElementById("commission").value = data.commission;

                document.getElementById("take-profit").checked = data.moving_tp;
                document.getElementById("stop-loss").checked = data.moving_sl;
            });
    }
}

function analyzeBacktest(id) {
    fetch(`/backtest/api/backtest-result/${id}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Gelen veri:', data); // Gelen JSON veriyi kontrol et
            alert('Data is ready. You are being directed to result.');

            // Veriyi sessionStorage'a kaydet (sonraki sayfada kullanmak için)
            sessionStorage.setItem('backtestResult', JSON.stringify(data));

            // Yönlendirme yap
            window.location.href = `/backtest/result/`;
        })
        .catch(error => {
            console.error('Hata oluştu:', error);
            alert('Error, please try again!');
        });
}

function resetForm() {
    // Backtest adı giriş alanını sıfırla
    document.getElementById("backtest-name-input").value = "MyBt";

    // Strategy radio butonlarını sıfırla
    const strategyRadios = document.querySelectorAll('input[name="strategy"]');
    strategyRadios.forEach(radio => {
        radio.checked = false;
    });

    // Coin checkbox'larını sıfırla
    const coinCheckboxes = document.querySelectorAll('#coins-form input[type="checkbox"]');
    coinCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Dropdown seçimlerini sıfırla
    setSelection("dropdownMenu3", "dropdown3", "", "Select Interval"); // Interval dropdown
    setSelection("dropdownMenu2", "dropdown2", "", "Select Period");  // Period dropdown

    // Diğer form alanlarını sıfırla
    document.getElementById("first-margin").value = "";
    document.getElementById("commission").value = "";

    // Checkbox'ları sıfırla
    document.getElementById("take-profit").checked = false;
    document.getElementById("stop-loss").checked = false;
}

function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
}

function showAlert(message, type = 'info') {
    console.log(message)
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');

    alertMessage.textContent = message;

    alertBox.className = "";
    alertBox.classList.add("visible"); // Türüne göre sınıf ekle (success, warning, info vb.)
    alertBox.classList.add(type); // Türüne göre sınıf ekle (success, warning, info vb.)

    // 5 saniye sonra otomatik kapat
    setTimeout(() => {
        alertBox.classList.remove('visible'); // Tüm sınıfları kaldır
    }, 2500);
}

function getIntervalReadableValue(interval) {
    const intervalMap = {
        "1m": "1 Minute",
        "15m": "15 Minutes",
        "30m": "30 Minutes",
        "1h": "1 Hour",
        "4h": "4 Hours",
        "1d": "1 Day",
        "1w": "1 Week"
    };
    return intervalMap[interval] || "Unknown Interval";
}

function getPeriodReadableValue(period) {
    const periodMap = {
        "1d": "1 Day",
        "5d": "5 Days",
        "30d": "1 Month",
        "90d": "3 Months",
        "180d": "6 Months",
        "365d": "1 Year",
        "730d": "2 Years",
        "1825d": "5 Years"
    };
    return periodMap[period] || "Unknown Period"; // Eğer eşleşme yoksa "Unknown Period" döner
}
