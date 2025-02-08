document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = document.getElementById("dark-mode-toggle");

    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("whatsapp-button").addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Número de WhatsApp (Reemplázalo con el tuyo)
        const phoneNumber = "573001234567";

        // Mensaje predefinido
        const whatsappMessage = `Hola, mi nombre es ${name}. Mi correo es ${email}. Quisiera hablar contigo. Mensaje: ${message}`;
        
        // Convertir a formato URL
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redirigir a WhatsApp
        window.open(url, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("p", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".flex-wrap div", { opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.2, delay: 1 });
});
