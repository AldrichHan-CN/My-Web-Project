/* Meun -- Show bottom menu hidden */

const navMenu = document.getElementById('nav-menu'),
      
      navToggle = document.getElementById('nav-toggle'),

      navClose = document.getElementById('nav-close')

/* Show Menu */

if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/* scroll down the Menu when click the link -- Mobile */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //remove the show-menu class by click link
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))