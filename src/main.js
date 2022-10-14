import Alpine from 'alpinejs';

// styles
import './style.scss';

const initApp = () => {
    window.Alpine = Alpine;
    Alpine.start();
};

initApp();