const Flowers Shop = document.querySelector(".flowers");
const navMenu = document.querySelector(".nav-menu");

flowers.addEventListener("click", mobileMenu);

function mobileMenu() {
    flowers.classList.toggle("active");
    navMenu.classList.toggle("active");
}