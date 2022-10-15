import Alpine from 'alpinejs';

// styles
import './style.scss';

const initApp = () => {
    window.Alpine = Alpine;
    Alpine.start();
};

initApp();

addEventListener('scroll', (event) => {
    const padding = 30
    var hight = window.pageYOffset
    if (hight > padding) {
        document.getElementById("header").classList.add("header-scroll");
        document.getElementById("nav").classList.add("nav-links-scroll");
    } else {
        document.getElementById("header").classList.remove("header-scroll");
        document.getElementById("nav").classList.remove("nav-links-scroll");
    }
});