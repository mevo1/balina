// Figürün fareyi takip etmesini sağlayan kod
const follower = document.getElementById("followereg");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX; // Farenin X pozisyonu
    const mouseY = event.clientY; // Farenin Y pozisyonu

    // Figürün konumunu fare pozisyonuna ayarla
    follower.style.transform = `translate(${mouseX-6}px, ${mouseY-711}px)`;
});






document.addEventListener("click", function (event) {
    // Yeni bir mermi deliği oluştur
    const bulletHole = document.createElement("div");
    bulletHole.classList.add("bullet-hole");

    // Tıklanan noktaya mermi deliğini yerleştir
    bulletHole.style.left = `${event.clientX - 15}px`; // Ortalamak için -15 ekliyoruz
    bulletHole.style.top = `${event.clientY - 15}px`;

    document.body.appendChild(bulletHole);

    // 10 saniye sonra DOM'dan kaldır
    setTimeout(() => {
        bulletHole.remove();
    }, 10000);
});






document.addEventListener("click", function () {
    const gunshot = document.getElementById("gunshot-sound");

    if (gunshot) {
        gunshot.currentTime = 0; // Sesin baştan başlamasını sağlar
        gunshot.play(); // Sesi çalar
    } else {
        console.error("Silah sesi dosyası bulunamadı!");
    }
});

document.body.addEventListener("click", function playSound() {
    const gunshot = document.getElementById("gunshot-sound");
    gunshot.play();
    document.body.removeEventListener("click", playSound);
});
