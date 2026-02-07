// Selecciona el bot&oacute;n hamburguesa
const toggle = document.querySelector('.nav-toggle');
// Selecciona el men&uacute; de navegaci&oacute;n
const menu = document.querySelector('.nav-menu');

// Evento click para abrir o cerrar el men&uacute;
toggle.addEventListener('click', () => {
    // Agrega o quita la clase "active"
    menu.classList.toggle('active');
});

// Cerrar men&uacute; al hacer click en un link (mobile UX)
// Cierra el men&uacute; al hacer clic en cualquier enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const scrollTopBtn = document.querySelector('.scroll-top');
// Mostrar u ocultar el bot&oacute;n seg&uacute;n el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Volver suavemente al inicio
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});