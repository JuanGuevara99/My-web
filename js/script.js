/* ========== Barra de navegación ========== */
window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('barra', window.scrollY > 100);
};
