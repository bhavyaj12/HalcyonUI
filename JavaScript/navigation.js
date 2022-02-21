const hamburgerMenu = document.querySelector(".hamburger-menu");
const normalNav = document.querySelector(".simple-nav.hamburger-nav");
const closeNav = document.querySelector(".close-hamburger-btn");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("nav-active");
    normalNav.classList.toggle("nav-active");
    closeNav.classList.toggle("close-ham-active");
});

closeNav.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("nav-active");
    normalNav.classList.toggle("nav-active");
    closeNav.classList.toggle("close-ham-active");
});