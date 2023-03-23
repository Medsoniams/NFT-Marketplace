const headerBurgerBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile__nav-wrapper');


headerBurgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})