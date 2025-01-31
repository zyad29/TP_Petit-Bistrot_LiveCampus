//GESTION DE LA BARRE DE NAVIGATION POUR LES ÉCRANS DE PETITES TAILLES

document.addEventListener('DOMContentLoaded', function(){
    const navScroll = document.querySelector('.navScroll');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    navScroll.addEventListener('click', () =>{
        navLinks.classList.toggle('nav-active');
        navScroll.classList.toggle('toggle');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            navScroll.classList.remove('toggle');
        });
    });
});




