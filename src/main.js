import Alpine from 'alpinejs';
import $ from 'jquery';

// styles
import './style.scss';

// Menu-animation
var menuVisibility = false;
const header = $('header');

const initApp = () => {
  window.Alpine = Alpine;
  Alpine.start();
};

initApp();
