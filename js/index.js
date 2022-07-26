const desplegarMenu = document.querySelector(".desplegar-menu");
const linksNavegacion = document.querySelectorAll('.nav-link');

desplegarMenu.addEventListener('click', () => {
    document.body.classList.toggle('abrir-menu');
});

linksNavegacion.forEach(link =>{
    link.addEventListener('click', ()=> {
        document.body.classList.remove('abrir-menu');
    });
});