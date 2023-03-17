var menu = document.querySelector('.menu');
var overlay = document.querySelector('.overlay');
var navLinks = document.querySelectorAll('.nav a');

function toggleActive(){
    this.classList.toggle("active");
    overlay.classList.toggle("menu-open");
}

menu.addEventListener("click", toggleActive);

function toggleOverlay(){
    menu.classList.remove("active");
    overlay.classList.remove("menu-open");
}

for(i = 0; i < navLinks.length; i++){
    var navlink = navLinks[i];
    navlink.addEventListener("click", toggleOverlay);
}


