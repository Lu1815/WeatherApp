/*==================== MENU SHOW Y HIDDEN ====================*/
// if (window.matchMedia("(max-width: 858px)").matches) {
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('menu-toggle'),
    navBtn = document.querySelectorAll('.btn')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navBtn.forEach(n => n.addEventListener('click', linkAction));
// }