
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav'),
      navToggle = document.getElementById('menubtn'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// ===== when navbar link is clicked, side nav hides =====
let navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav')
    // When we click on each nav__link, show-menu class will be removed
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Get all elements with the class 'fav'
const favoriteIcons = document.querySelectorAll('.fav');

favoriteIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('favorite'); 

        console.log('Image added to favorites!');
    });
});