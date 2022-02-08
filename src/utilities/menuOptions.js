/*==================== MENU SHOW Y HIDDEN ====================*/
// if (window.matchMedia("(max-width: 858px)").matches) {
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('menu-toggle'),
    navBtn = document.querySelectorAll('.btn')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.remove("close-menu");
    })
}

function linkAction() {
    navMenu.classList.add("close-menu");
}
navBtn.forEach(n => n.addEventListener('click', linkAction));
// }