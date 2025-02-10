document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("strategyList");
    if (!list) {
        console.error("strategyList öğesi bulunamadı!");
    } else {
        console.log("strategyList öğesi bulundu:", list);
        loadStrategy();
    }
});


function loadStrategy() {
    const list = document.getElementById("strategyList");
    if (!list) {
        console.error("strategyList öğesi bulunamadı!");
        return; // Eğer öğe yoksa, fonksiyondan çık
    }

    fetch("/strategy/api/strategies_list/")
        .then(response => {
            if (!response.ok) throw new Error("API isteği başarısız oldu.");
            return response.json();
        })
        .then(data => {
            list.innerHTML = ""; // Listeyi temizle
            data.forEach((strategy, index) => {
                list.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${strategy.id}">
                    <div>
                        <strong>${index + 1}. ${strategy.title}</strong>
                    </div>
                    <button id="openBtn-${strategy.id}" class="open-btn" data-id="${strategy.id}" onclick="openStrategy(${strategy.id}, event, this)">
                        <i class="fas fa-folder-open me-1"></i> Open
                    </button>
                    <button id="deleteBtn-${strategy.id}" class="delete-btn" data-id="${strategy.id}" onclick="deleteStrategy(${strategy.id}, event, this)">
                        <i class="fas fa-trash-alt me-1"></i> Delete
                    </button>
                </li>`;
            });
        })
        .catch(error => {
            console.error("Bir hata oluştu:", error.message);
            showAlert("Liste yüklenemedi. Lütfen tekrar deneyin.", "danger");
        });
}

let currentStrategyId = null;
function saveStrategy() {
    //remove_graph()
    const title = document.getElementById("strategy-title").value;
    const code = document.getElementById("code").value;

    const url = currentStrategyId
        ? `/strategy/api/strategy_edit/${currentStrategyId}/` // Güncelleme için
        : "/strategy/api/strategy/"; // Yeni ekleme için

    const method = currentStrategyId ? 'PUT' : 'POST';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ title, code })
    })
    
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        showAlert(data.message, data.info);
        loadStrategy();
    })
    .catch(error => {
        alert(`An error occurred: ${error.message}`);
    });
}

function openStrategy(id) {
    fetch(`/strategy/api/strategies/${id}/`)
        .then(response => response.json())
        .then(data => {
            currentStrategyId = id;
            document.getElementById("strategy-title").value = data.title;           
            document.getElementById("code").value = data.code;
            currentIndicatorId = id; // Güncelleme için ID'yi ayarla
            
            closeModal('strategyModal');
        });
}

function deleteStrategy(id, event) {
    event.stopPropagation(); // Liste tıklamasını engelle
    if (confirm("Are you sure you want to delete this indicator?")) {
        // Silme işlemi burada yapılacak
        console.log(`Indicator will be deleted.`);
        fetch(`/strategy/api/del-strategies/${id}/`,{
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
            showAlert(data.message, data.info);
            loadStrategy();
        })
        .catch(error => {
            alert(`An error occurred: ${error.message}`);
        });
    }
}

function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
}

function showAlert(message, type = 'info') {
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

function closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modalInstance.hide();

    setTimeout(() => {
        document.getElementById('mainButton').focus();
    }, 300);
}
document.addEventListener("DOMContentLoaded", () => {
    const fullscreenToggle = document.getElementById("fullscreen-toggle");
    const closeFullscreen = document.getElementById("close-fullscreen");
    const textarea = document.getElementById("code");

    // Eski stilleri kaydetmek için
    const defaultStyles = {
        backgroundColor: textarea.style.backgroundColor || "#1f1f1f", // Varsayılan renk
        color: textarea.style.color || "white",                   // Varsayılan yazı rengi
    };

    // Büyütme butonu
    fullscreenToggle.addEventListener("click", () => {
        textarea.style.position = "fixed";
        textarea.style.top = "10%";
        textarea.style.left = "10%";
        textarea.style.width = "80%";
        textarea.style.height = "80vh";
        textarea.style.zIndex = "1050";
        textarea.style.backgroundColor = "#1f1f1f"; // Fullscreen siyah arka plan
        textarea.style.color = "white";           // Fullscreen beyaz yazı
        textarea.style.boxShadow = "0 0 15px #1f1f1f";
        closeFullscreen.style.display = "block";  // Kapat butonu görünür
    });

    // Kapatma butonu
    closeFullscreen.addEventListener("click", () => {
        // Stilleri eski hâline döndür
        textarea.style.position = "";
        textarea.style.top = "";
        textarea.style.left = "";
        textarea.style.width = "";
        textarea.style.height = "";
        textarea.style.zIndex = "";
        textarea.style.boxShadow = "";

        // Varsayılan renkleri geri yükle
        textarea.style.backgroundColor = defaultStyles.backgroundColor;
        textarea.style.color = defaultStyles.color;

        closeFullscreen.style.display = "none";
    });
});

function resetForm() {
    document.getElementById("strategy-title").value = "";           
    document.getElementById("code").value = "";
}