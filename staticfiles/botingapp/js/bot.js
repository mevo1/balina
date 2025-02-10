document.addEventListener("DOMContentLoaded", function() {
    loadBot();
    
    // URL'den fill parametresini kontrol et
    const urlParams = new URLSearchParams(window.location.search);
    const fillId = urlParams.get('fill');
    if (fillId) {
        fillingBot(fillId);
    }
});

function loadBot() {
    fetch("/boting/api/bot-list/")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("botList");
            list.innerHTML = "";

            data.forEach((bot, index) => {
                list.innerHTML +=  `
                <li data-id="${bot.id}" onclick="viewBot(${bot.id})">
                    <a>
                        <strong>${index + 1}.</strong> <!-- artan numara -->
                        <i></i> ${bot.name}
                    </a>
                    <button id="viewBtn-${bot.id}" class="view-btn" data-id="${bot.id}" onclick="viewBot(${bot.id})">${Number(bot.last_amount).toFixed(1)}$</button>
                    <button id="analyzeBtn-${bot.id}" class="analyze-btn" onclick="analyzeBot(${bot.id})">Analyze</button> 
                </li>`;
            });
        });
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

function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
}

function resetForm() {
    const currentURL = window.location.pathname;
    if (currentURL.startsWith('/boting/bot-analyze/')) {
        window.location.href = `/boting/boting/`;
    }

    document.getElementById("bot-name-input").value = "MyBot";

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

    // Diğer form alanlarını sıfırla
    const firstAmount = document.getElementById("first-amount"); // ID değiştirildi
    if (firstAmount) firstAmount.value = "100";

    // Checkbox'ları sıfırla
    document.getElementById("take-profit").checked = false;
    document.getElementById("stop-loss").checked = false;
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

function saveBot() {
    const name = document.getElementById("bot-name-input").value;

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

    const interval = document.getElementById('dropdown3').value;

    const first_amount = document.getElementById("first-amount").value;

    const moving_tp = document.getElementById("take-profit").checked;
    const moving_sl = document.getElementById("stop-loss").checked;

    const url = "/boting/api/bot-add/";
    const method = 'POST';

    fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            body: JSON.stringify({ name, strategy_id, coin_list, interval, first_amount, moving_tp, moving_sl })
    })
    .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
    })
    .then(data => {
        showAlert(data.message, data.info);
        //setTimeout(() => { // bakiyeyi aştığımızda hata verdiğinde tekrar yüklemem yapmaması için kapattım.
        //    window.location.href = `/boting/boting/`;
        //}, 2000);  // 2000 milliseconds = 2 seconds
        loadBot();
    })
    .catch(error => {
            alert(`An error occurred: ${error.message}`);
            reject(error); // Hata oluşursa Promise'i reddet
    });
}

function removeBot(id) {
    if (confirm('Are you sure you want to delete this bot?')) {
        fetch(`/boting/bot-remove/${id}/`)
            .then(response => response.json())

            .then(data => {
                showAlert(data.message, data.info);
                setTimeout(() => {
                    window.location.href = `/boting/boting/`;
                }, 1000);  // 1000 milliseconds = 1 seconds
                loadBot();
            });
    }
}

function viewBot(id) {
    const currentURL = window.location.pathname;

    if (currentURL.startsWith('/boting/bot-analyze/')) {
        window.location.href = `/boting/boting/?fill=${id}`;
    } else {
        fillingBot(id);
    }
}

function fillingBot(id){
    fetch(`/boting/api/bot-view/${id}/`)
            .then(response => response.json())

            .then(data => {
                resetForm();
                document.getElementById("bot-name-input").value = data.name;

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

                const firstAmount = document.getElementById("first-amount"); // ID değiştirildi
                if (firstAmount) firstAmount.value = Number(data.first_amount).toFixed(1);

                document.getElementById("take-profit").checked = data.moving_tp;
                document.getElementById("stop-loss").checked = data.moving_sl;
            });
}

function analyzeBot(id) {
    console.log(id)
    window.location.href = `/boting/bot-analyze/${id}/`;
}
