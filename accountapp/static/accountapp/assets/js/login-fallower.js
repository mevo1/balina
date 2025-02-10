// Figürün fareyi takip etmesini sağlayan kod
const follower = document.getElementById("follower");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX; // Farenin X pozisyonu
    const mouseY = event.clientY; // Farenin Y pozisyonu

    // Figürün konumunu fare pozisyonuna ayarla
    follower.style.transform = `translate(${mouseX-6}px, ${mouseY-534}px)`;
});
