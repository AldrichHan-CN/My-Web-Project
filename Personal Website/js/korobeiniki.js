/* Meun -- Show bottom menu hidden */

const navMenu = document.getElementById("nav-menu"),
      
      navToggle = document.getElementById("nav-toggle"),

      navClose = document.getElementById("nav-close")

/* Show Menu */

if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
    })
}
