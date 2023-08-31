const x = window.matchMedia("(max-width: 960px");
const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const headWelcome = body.querySelector('.welcome');
const sideNav = document.querySelector('#sidenav');

function responsive(){
    document.querySelector('span[data-icon="mdi:magnify"]').style.display = 'none'

    headWelcome.style.cssText = 'display: none;';
    body.style.cssText = 'grid-template-rows: 70px 1fr';
    hamburgerMenu.classList.remove('active');
}

if(x.matches) {
    responsive();
    hamburgerMenu.addEventListener('click', function() {
        // sideNav.classList.remove('active');
        sideNav.style.width = '250px';
        sideNav.style.marginLeft = '0px';
    })
    
    window.addEventListener('click', function(e){
        if(!hamburgerMenu.contains(e.target) && !sideNav.contains(e.target)){
            // sideNav.classList.add('active');
            sideNav.style.width = '0px'; 
            sideNav.style.marginLeft = '-250px'; 
        }
    })
} else {
    sideNav.classList.remove('active');
}
