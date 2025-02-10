document.addEventListener("DOMContentLoaded", loadApis);
function loadApis() {
    fetch("api/api/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const list = document.getElementById("apiList");
            list.innerHTML = "";
            data.forEach((api, index) => {
                list.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center api-item">
                    <div class="api-link text-decoration-none text-dark" style="cursor: pointer">
                        <span class="badge bg-success rounded-pill me-2">${index + 1}</span>
                        <span onclick="openApi(${api.id})">${api.name}</span>
                    </div>
                    <button class="btn btn-link text-danger p-0 delete-btn" onclick="deleteApi(${api.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </li>`;
            });
        });
}


function openApi(id) {
    console.log(id)
    fetch(`api-connection/api/${id}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("apiName").value = data.name;
            document.getElementById("apiAddress").value = data.address;
            document.getElementById("apiSecret").value = data.secretkey;
        });
}

function saveApi() {
    const name = document.getElementById("apiName").value;
    const adress = document.getElementById("apiAddress").value;
    const secretkey = document.getElementById("apiSecret").value;
    const totalbalance = document.getElementById("totalBalance").value;

    const url = "/connection/api/apis/"; // Yeni ekleme için

    const method ='POST';
  
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ name, adress, secretkey, totalbalance })
        
    })
    
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        //alert('Saved successfully.')
        showAlert(data.message, data.info);
        loadApis();
        //resetForm();
    })
    .catch(error => {
        alert(`An error occurred: ${error.message}`);
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

function deleteApi(id) {
    fetch(`/connection/api/delete/${id}/`, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': getCSRFToken()
        }
    })
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        showAlert(data.message, data.info);
        loadApis();
    })
    .catch(error => {
        alert(`An error occurred: ${error.message}`);
    });
}

