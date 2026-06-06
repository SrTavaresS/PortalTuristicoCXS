// ===========================
// MENU HAMBÚRGUER
// ===========================

const hamburgerButtons = document.querySelectorAll('.btn-hamburger');
const navbar = document.querySelector('nav');

function menuToggle() {
    hamburgerButtons.forEach(button => {
        button.classList.toggle('active');
    });

    navbar.classList.toggle('active');
}

hamburgerButtons.forEach(button => {
    button.addEventListener('click', menuToggle);
});


// ===========================
// CARROSSEL COM HOVER
// ===========================

const galerias = document.querySelectorAll('.galeria');

galerias.forEach(galeria => {

    const slides = galeria.querySelectorAll('.slide');

    if (slides.length <= 1) return;

    let indice = 0;
    let intervalo;

    galeria.addEventListener('mouseenter', () => {

        intervalo = setInterval(() => {

            slides[indice].classList.remove('ativo');

            indice = (indice + 1) % slides.length;

            slides[indice].classList.add('ativo');

        }, 2000);

    });

    galeria.addEventListener('mouseleave', () => {

        clearInterval(intervalo);

        slides.forEach(slide => {
            slide.classList.remove('ativo');
        });

        indice = 0;
        slides[0].classList.add('ativo');

    });

});