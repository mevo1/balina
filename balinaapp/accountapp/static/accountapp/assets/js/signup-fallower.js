// Figürün fareyi takip etmesini sağlayan kod
const follower = document.getElementById("followereg");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX; // Farenin X pozisyonu
    const mouseY = event.clientY; // Farenin Y pozisyonu

    // Figürün konumunu fare pozisyonuna ayarla
    follower.style.transform = `translate(${mouseX-85}px, ${mouseY-710}px)`;
});