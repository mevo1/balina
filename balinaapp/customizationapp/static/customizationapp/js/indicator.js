document.addEventListener("DOMContentLoaded", loadIndicators);
function loadIndicators() {
    fetch("/customization/api/indicator/")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("indicatorList");
            list.innerHTML = "";
            data.forEach((indicator, index) => {
                list.innerHTML +=  `
                <li data-id="${indicator.id}" onclick="editIndicator(${indicator.id})">
                    <a>
                        <strong>${index + 1}.</strong> <!-- artan numara -->
                        <i class="fas fa-chart-line"></i> ${indicator.title}
                    </a>
                    <button id="visibleBtn-${indicator.id}" class="visible-btn" data-id="${indicator.id}" onclick="visibleIndicator(${indicator.id}, event, this)">Visible</button>
                    <button id="deleteBtn-${indicator.id}" class="delete-btn" onclick="deleteIndicator(${indicator.id}, event)">Del</button> 
                </li>`;
            });
            const buttons = document.querySelectorAll('.visible-btn');
            const traceIds = window.traceList.map(trace => trace.id);
            buttons.forEach(button => {
                const buttonId = parseInt(button.getAttribute('data-id'), 10);
                if (traceIds.includes(buttonId)) {
                    button.classList.add('disabled-btn');
                }
            });
        });
}


let currentIndicatorId = null;

function saveIndicator() {
    //remove_graph()
    const title = document.getElementById("indicator-title").value;
    const code = document.getElementById("code").value;
    const OnGraph = document.getElementById("on_graph").checked;

    const url = currentIndicatorId
        ? `/customization/api/indicator/${currentIndicatorId}/` // Güncelleme için
        : "/customization/api/indicators/"; // Yeni ekleme için

    const method = currentIndicatorId ? 'PUT' : 'POST';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ title, code, on_graph: OnGraph })
    })
    
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        showAlert(data.message, data.info);
        loadIndicators();
    })
    .catch(error => {
        alert(`An error occurred: ${error.message}`);
    });
}

function editIndicator(id) {
    fetch(`/customization/api/indicators/${id}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("indicator-title").value = data.title;           
            document.getElementById("code").value = data.code;
            document.getElementById("on_graph").checked = data.on_graph;
            currentIndicatorId = id; // Güncelleme için ID'yi ayarla

            updateActiveIndicator(id);
        });
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

    alertBox.classList.add("visible"); // Türüne göre sınıf ekle (success, warning, info vb.)
    alertBox.classList.add(type); // Türüne göre sınıf ekle (success, warning, info vb.)

    // 5 saniye sonra otomatik kapat
    setTimeout(() => {
        alertBox.classList.remove('visible'); // Tüm sınıfları kaldır
    }, 2500);
}

function resetForm() {
    document.getElementById("indicator-title").value = "";           
    document.getElementById("code").value = "";
    document.getElementById("on_graph").checked = false;
    currentIndicatorId = null; // Form sıfırlanınca ID'yi temizle
}

function updateActiveIndicator(id) {
    const indicatorItems = document.querySelectorAll("#indicatorList li");

    // Remove the active class from all list items
    indicatorItems.forEach(item => item.classList.remove("active"));

    // Find the clicked indicator and add the active class
    const activeItem = document.querySelector(`#indicatorList li[data-id='${id}']`);
    if (activeItem) {
        activeItem.classList.add("active");
    }
}

function deleteIndicator(id, event) {
    event.stopPropagation(); // Liste tıklamasını engelle
    if (confirm("Are you sure you want to delete this indicator?")) {
        // Silme işlemi burada yapılacak
        console.log(`Indicator with ID ${id} will be deleted.`);
        fetch(`/customization/api/indicatordel/${id}/`,{
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
            loadIndicators();
            //resetForm();
        })
        .catch(error => {
            alert(`An error occurred: ${error.message}`);
        });
    }
    
    
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


