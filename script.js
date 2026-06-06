const hamburgerButtons = document.querySelectorAll('.btn-hamburger');
const navbar = document.querySelector('nav');
const overlay = document.querySelector('#overlay');

function menuToggle() {
    hamburgerButtons.forEach(button =>
        button.classList.toggle('active')
    );

    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}

hamburgerButtons.forEach(button => {
    button.addEventListener('click', menuToggle);
});

overlay.addEventListener('click', menuToggle);