// Acción del botón icono menu
let iconoMenu = document.querySelector('#icono-menu');
let navbar = document.querySelector('.navbar');

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle('bx-x');
    navbar.classList.toggle('activo');
};


// Selecciona todas las secciones y enlaces de navegación en el encabezado
let secciones = document.querySelectorAll('section');
let navEnlaces = document.querySelectorAll('header nav a');

// Se ejecuta cada vez que el usuario hace scroll
window.onscroll = () => {
    // Recorre todas las secciones
    secciones.forEach(sec => {
        // Obtiene la posición actual del scroll
        let top = window.scrollY;
        // Calcula el desplazamiento (offset) de la sección actual
        let offset = sec.offsetTop - 150;
        // Obtiene la altura de la sección actual
        let height = sec.offsetHeight;
        // Obtiene el ID de la sección actual
        let id = sec.getAttribute('id');

        // Verifica si el usuario está dentro de la sección actual
        if (top >= offset && top < offset + height) {
            // Recorre todos los enlaces de navegación
            navEnlaces.forEach(enlace => {
                // Elimina la clase 'activo' de todos los enlaces
                enlace.classList.remove('activo');
                // Agrega la clase 'activo' al enlace cuyo href coincide con el ID de la sección actual
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            });
        }
    });

    // Barra de navegación 
    let header = document.querySelector('.header');

    header.classList.toggle('barra', window.scrollY > 100);


    //eliminar el icono de menú de la barra de navegación al hacer clic en el enlace de la barra de navegación (scroll)
    iconoMenu.classList.remove('bx-x');
    navbar.classList.remove('activo');
};

// MODO OSCURO
let modoOscuroIcono = document.querySelector("#modoOscuro-icono");

modoOscuroIcono.onclick = () => {
    modoOscuroIcono.classList.toggle('bx-sun');
    document.body.classList.toggle('modo-oscuro');
};


// Scroll de la página
ScrollReveal({
    //reset: true,
    distace: '80px',
    duration: '2000',
    delay: 200
});


ScrollReveal().reveal('.contenido-inicio, .titulo', { origin: 'top' });
ScrollReveal().reveal('.imagen-inicio img, .contenido-servicios, .logo-portafolio, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.contenido-inicio h1, .imagen-sobreMi img', { origin: 'left' });
ScrollReveal().reveal('.contenido-inicio h3, .contenido-inicio p, .contenodo-sobreMi', { origin: 'right' });
