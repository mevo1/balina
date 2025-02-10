document.addEventListener("DOMContentLoaded", loadIndicators);
function loadIndicators() {
    fetch("/customization/api/indicator/")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("indicatorList");
            list.innerHTML = "";
            data.forEach((indicator, index) => {
                list.innerHTML +=  `
                <li data-id="${indicator.id}">
                    <a>
                        <strong>${index + 1}.</strong> <!-- artan numara -->
                        <i class="fas fa-chart-line"></i> ${indicator.title}
                    </a>
                    <button id="visibleBtn-${indicator.id}" class="visible-btn" data-id="${indicator.id}" onclick="visibleIndicator(${indicator.id}, event, this)">Visible</button>
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


function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
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