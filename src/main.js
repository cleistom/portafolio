document.addEventListener("DOMContentLoaded", () => {
    // Botón de WhatsApp
    const whatsappButton = document.getElementById("whatsapp-button");

    whatsappButton.addEventListener("click", function () {
        // Número de WhatsApp (reemplaza con tu número)
        const phoneNumber = "573216092561";

        // Mensaje predefinido
        const whatsappMessage = `Hola, quisiera hablar con tigo sobre... .`;

        // Crear el enlace de WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirigir a WhatsApp
        window.open(url, "_blank");
    });
});