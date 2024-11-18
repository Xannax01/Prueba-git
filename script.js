// Información de los juegos
const juegos = [
    {
        titulo: "Pixel Quest",
        descripcion: "Explora un mundo pixelado lleno de aventuras y desafíos.",
        imagen: "img/Juego1.jpeg"
    },
    {
        titulo: "Shadow of Pixels",
        descripcion: "Sumérgete en una historia épica en un mundo oscuro y pixelado.",
        imagen: "img/Juego2.jpeg"
    },
    {
        titulo: "Retro Realm",
        descripcion: "Revive la nostalgia de los juegos clásicos con este título único.",
        imagen: "img/Juego3.jpeg"
    }
];

// Mostrar el modal al hacer clic en una imagen del carrusel
document.querySelectorAll(".carousel-item img").forEach((img, index) => {
    img.addEventListener("click", () => {
        const juego = juegos[index];
        document.getElementById("modalImagen").src = juego.imagen;
        document.getElementById("modalTitulo").textContent = juego.titulo;
        document.getElementById("modalDescripcion").textContent = juego.descripcion;
        const modal = new bootstrap.Modal(document.getElementById("infoJuego"));
        modal.show();
    });
});


