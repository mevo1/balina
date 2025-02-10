const prices = {}; // Anlık fiyatları saklamak için

const socket = new WebSocket(
    `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/ws/binance/`
);

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    const symbol = data.symbol; // Binance formatında -> "BTCUSDT"
    const price = parseFloat(data.price);

    if (symbol && !isNaN(price)) {
        // USDT çiftlerini daha güvenli bir şekilde ayır
        const assetCode = symbol.toString().endsWith("usdt") ? symbol.toString().slice(0, -4) : symbol;        
        // Güncel fiyatı kaydet
        prices[assetCode] = price;

        // Fiyat bilgisini güncelle
        const priceElement = document.getElementById(`${symbol.toLowerCase()}-price`);
        if (priceElement) {
            priceElement.innerText = price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        // Amount değerlerini güncelle
        updateAmount(assetCode);
    }
};

socket.onclose = function() {
    console.error("WebSocket connection closed unexpectedly");
    setTimeout(() => {
        window.location.reload();
    }, 5000);
};

socket.onerror = function(error) {
    console.error("WebSocket error:", error);
};

// Belirli bir koinin Amount değerini güncelleyen fonksiyon
function updateAmount(assetCode) {
    const pieceElement = document.getElementById(`${assetCode}-piece`);
    const amountElement = document.getElementById(`${assetCode}-amount`);
    
    if (pieceElement && amountElement) {
        const piece = parseFloat(pieceElement.innerText.trim()); // Miktarı al
        
        if (!isNaN(piece) && prices[assetCode]) {
            const amount = piece * prices[assetCode];
            amountElement.innerText = `$${amount.toFixed(2)}`;
            updateTotalHoldings(); // Amount güncellendiğinde toplam tutarı da güncelle
        }
    }
}

// Toplam tutarı hesaplayan ve güncelleyen yeni fonksiyon
function updateTotalHoldings() {
    const amountElements = document.querySelectorAll('[id$="-amount"]');
    let total = 0;
    let initialAmount = 0;

    amountElements.forEach(element => {
        const amount = parseFloat(element.innerText.replace('$', ''));
        if (!isNaN(amount)) {
            total += amount;
        }
    });

    const totalHoldingsElement = document.getElementById('total-holdings');
    if (totalHoldingsElement) {
        totalHoldingsElement.innerText = `$${total.toFixed(2)}`;
        
        // Update profit
        const totalProfitElement = document.getElementById('total-profit');
        if (totalProfitElement) {
            initialAmount = parseFloat(totalProfitElement.dataset.initialAmount);
            const profit = total - initialAmount;
            const absprofit = Math.abs(profit);

            totalProfitElement.innerText = `$${absprofit.toFixed(2)}`;
            
            // Add color based on profit/loss
            if (profit >= 0) {
                totalProfitElement.innerText = `+$${absprofit.toFixed(2)}`;
                totalProfitElement.classList.remove('text-danger');
                totalProfitElement.classList.add('text-success');
            } else {
                totalProfitElement.innerText = `-$${absprofit.toFixed(2)}`;
                totalProfitElement.classList.remove('text-success');
                totalProfitElement.classList.add('text-danger');
            }
        }

        // Update daily profit indicators
        updateDailyProfit(total);


        // Update weekly profit indicators
        updateWeeklyProfit(total);

        // Update monthly profit indicators
        updateMonthlyProfit(total);

        // Update total profit indicators
        updateTotalProfit(total, initialAmount);

        // Update portfolio share
        const portfolioShareElement = document.getElementById('portfolio-share');


        if (portfolioShareElement) {
            const userTotalBalance = parseFloat(portfolioShareElement.dataset.userBalance);
            if (!isNaN(userTotalBalance) && userTotalBalance > 0) {
                const sharePercentage = (total / userTotalBalance) * 100;
                portfolioShareElement.innerText = `${sharePercentage.toFixed(2)}%`;
            }
        }
    }
}

function updateDailyProfit(total) {
    const listGroupItem = document.querySelector('.list-group-item[data-day-first-amount]');
        if (listGroupItem) {
            const dayFirstAmount = parseFloat(listGroupItem.dataset.dayFirstAmount);

            if (!isNaN(dayFirstAmount)) {
                const dailyProfit = total - dayFirstAmount;
                const dailyProfitPercentage = ((dailyProfit / dayFirstAmount) * 100).toFixed(1);
                const dailyProfitDisplay = Math.abs(dailyProfit).toFixed(1);
                
                const profitContainer = listGroupItem.querySelector('.d-flex.justify-content-between');
                if (profitContainer) {
                    if (dailyProfit >= 0) {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-day text-primary me-2"></i>
                                <span class="fw-medium fs-6">Daily</span>
                            </div>
                            <span class="badge bg-success-subtle text-success fs-6">
                                <i class="fas fa-arrow-up" id="daily-profit-up"></i>
                                $${dailyProfitDisplay} (%${dailyProfitPercentage})
                            </span>
                        `;
                    } else {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-day text-primary me-2"></i>
                                <span class="fw-medium fs-6">Daily</span>
                            </div>
                            <span class="badge bg-danger-subtle text-danger fs-6">
                                <i class="fas fa-arrow-down" id="daily-profit-down"></i>
                                $${dailyProfitDisplay} (%${dailyProfitPercentage})
                            </span>
                        `;
                    }
                }
            }
        }
}

function updateWeeklyProfit(total) {
    const listGroupItemWeek = document.querySelector('.list-group-item[data-week-first-amount]');
        if (listGroupItemWeek) {
            const weekFirstAmount = parseFloat(listGroupItemWeek.dataset.weekFirstAmount);
            
            if (!isNaN(weekFirstAmount)) {
                const weeklyProfit = total - weekFirstAmount;
                const weeklyProfitPercentage = ((weeklyProfit / weekFirstAmount) * 100).toFixed(1);
                const weeklyProfitDisplay = Math.abs(weeklyProfit).toFixed(1);

                const profitContainer = listGroupItemWeek.querySelector('.d-flex.justify-content-between');
                if (profitContainer) {
                    if (weeklyProfit >= 0) {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-week text-primary me-2"></i>
                                <span class="fw-medium fs-6">Weekly</span>
                            </div>
                            <span class="badge bg-success-subtle text-success fs-6">
                                <i class="fas fa-arrow-up" id="weekly-profit-up"></i>
                                $${weeklyProfitDisplay} (%${weeklyProfitPercentage})
                            </span>
                        `;

                    } else {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-week text-primary me-2"></i>
                                <span class="fw-medium fs-6">Weekly</span>
                            </div>
                            <span class="badge bg-danger-subtle text-danger fs-6">
                                <i class="fas fa-arrow-down" id="weekly-profit-down"></i>
                                $${weeklyProfitDisplay} (%${weeklyProfitPercentage})
                            </span>
                        `;

                    }
                }
            }
        }
}

function updateMonthlyProfit(total) {
    const listGroupItemMonth = document.querySelector('.list-group-item[data-month-first-amount]');
        if (listGroupItemMonth) {
            const monthFirstAmount = parseFloat(listGroupItemMonth.dataset.monthFirstAmount);
            

            if (!isNaN(monthFirstAmount)) {
                const monthlyProfit = total - monthFirstAmount;
                const monthlyProfitPercentage = ((monthlyProfit / monthFirstAmount) * 100).toFixed(1);
                const monthlyProfitDisplay = Math.abs(monthlyProfit).toFixed(1);


                const profitContainer = listGroupItemMonth.querySelector('.d-flex.justify-content-between');

                if (profitContainer) {
                    if (monthlyProfit >= 0) {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">

                                <i class="fas fa-calendar-alt text-primary me-2"></i>
                                <span class="fw-medium fs-6">Monthly</span>
                            </div>
                            <span class="badge bg-success-subtle text-success fs-6">
                                <i class="fas fa-arrow-up" id="monthly-profit-up"></i>
                                $${monthlyProfitDisplay} (%${monthlyProfitPercentage})
                            </span>
                        `;


                    } else {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-alt text-primary me-2"></i>
                                <span class="fw-medium fs-6">Monthly</span>
                            </div>
                            <span class="badge bg-danger-subtle text-danger fs-6">
                                <i class="fas fa-arrow-down" id="monthly-profit-down"></i>
                                $${monthlyProfitDisplay} (%${monthlyProfitPercentage})
                            </span>
                        `;


                    }
                }
            }
        }
}

function updateTotalProfit(total, initialAmount) {
    const listGroupItemTotal = document.querySelector('.list-group-item[data-first-amount]');
    console.log(listGroupItemTotal);
        if (listGroupItemTotal) {

            if (!isNaN(initialAmount)) {
                const totalProfit = total - initialAmount;
                const totalProfitPercentage = ((total / initialAmount) * 100).toFixed(1);
                const totalProfitDisplay = Math.abs(total-initialAmount).toFixed(1);

                const profitContainer = listGroupItemTotal.querySelector('.d-flex.justify-content-between');


                if (profitContainer) {
                    if (totalProfit >= 0) {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-chart-pie text-primary me-2"></i>
                                <span class="fw-medium fs-6">Total</span>
                            </div>
                            <span class="badge bg-success-subtle text-success fs-6">
                                <i class="fas fa-arrow-up" id="total-profit-up"></i>
                                $${totalProfitDisplay} (%${totalProfitPercentage})
                            </span>
                        `;

                    } else {
                        profitContainer.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-chart-pie text-primary me-2"></i>
                                <span class="fw-medium fs-6">Total</span>
                            </div>
                            <span class="badge bg-danger-subtle text-danger fs-6">
                                <i class="fas fa-arrow-down" id="total-profit-down"></i>
                                $${totalProfitDisplay} (%${totalProfitPercentage})
                            </span>
                        `;

                    }
                }
            }
        }

}

