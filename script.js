const hamburgerButtons = document.querySelectorAll('.btn-hamburger');
const navbar = document.querySelector('nav');

function menuToggle() {
    hamburgerButtons.forEach((button) => button.classList.toggle('active'));
    navbar.classList.toggle('active');
}

hamburgerButtons.forEach((button) =>{
    button.addEventListener('click', menuToggle);
});