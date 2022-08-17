// Header Navigation Button
// const nav_button = document.querySelector('.nav__toggle');
// const menu_icon = document.querySelector('.menu-icon');
// const nav = document.querySelector('.nav');

// nav_button.onclick = function(){
//   nav.classList.toggle('nav--mobile');
//   menu_icon.classList.toggle('menu-icon--active');
//   document.body.classList.toggle('no-scroll');
// }

let nav_button = document.querySelector(".nav__button");
let src_arrow_light = "./images/icons/icon-arrow-right-light.svg";
let src_arrow_dark = "./images/icons/icon-arrow-right-dark.svg";

nav_button.addEventListener('mouseenter', () => {
    console.log("Hover")
    console.log(nav_button.getAttribute('src'))
    console.log(nav_button.src)
    nav_button.src = src_arrow_light;
});

nav_button.addEventListener('mouseleave', () => {
    console.log("UnHover")
    nav_button.src = src_arrow_dark;
});