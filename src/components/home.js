import { getSectionCordinates, scrollTo } from "../helpers/scroll";

window.homeComponent = () => {
    return {
        /**
         * onReadMoreClick
         * @param {MouseEvent} $event
         * @param {HTMLElement} section
         * @param {HTMLElement} header
         */
        onReadMoreClick($event, section, header) {
            const sectionCordinates = getSectionCordinates(section);
            const headerHeight = header.clientHeight;
            const padding = 30;

            /**
             * @type ScrollToOptions
             */
            const scrollToOptions = {
                left: 0,
                top: sectionCordinates.top - headerHeight - padding,
            };

            scrollTo(scrollToOptions);
        },
        /**
         * onLogoClick
         * @param {MouseEvent} $event
         */
        onLogoClick($event) {
            scrollTo({
                left: 0,
                top: 0,
            });
        },
        /**
         * onNavLinkClick
         * @param {MouseEvent} $event
         * @param {HTMLElement} section
         * @param {HTMLElement} header
         */
        onNavLinkClick($event, section, header) {
            const sectionCordinates = getSectionCordinates(section);
            const headerHeight = header.clientHeight;
            const padding = 30;

            Array.from(document.querySelectorAll('.nav-open-menu')).forEach((el) => el.classList.remove('nav-open-menu'));
            Array.from(document.querySelectorAll('.responsive-nav-container-open-menu')).forEach((el) => el.classList.remove('responsive-nav-container-open-menu'));
            Array.from(document.querySelectorAll('.menu-close-show')).forEach((el) => el.classList.remove('menu-close-show'));  
            Array.from(document.querySelectorAll('.hide-site-nav')).forEach((el) => el.classList.remove('hide-site-nav'));  

            /**
             * @type ScrollToOptions
             */
            const scrollToOptions = {
                left: 0,
                top: sectionCordinates.top - headerHeight - padding,
            };

            scrollTo(scrollToOptions);
        },
        /**
         * openMenu
         * @param {MouseEvent} $event
         */
        openMenu($event) {
            console.log("menu click");

            document.getElementById("nav").classList.add("nav-open-menu");
            document.getElementById("responsive-nav-container").classList.add("responsive-nav-container-open-menu");
            document.getElementById("menu-close").classList.add("menu-close-show");    
            document.getElementById("site-nav").classList.add("hide-site-nav");    
        },
        /**
         * closeMenu
         * @param {MouseEvent} $event
         */
         closeMenu($event) {
            console.log("menu click close");

            Array.from(document.querySelectorAll('.nav-open-menu')).forEach((el) => el.classList.remove('nav-open-menu'));
            Array.from(document.querySelectorAll('.responsive-nav-container-open-menu')).forEach((el) => el.classList.remove('responsive-nav-container-open-menu'));
            Array.from(document.querySelectorAll('.menu-close-show')).forEach((el) => el.classList.remove('menu-close-show'));  
            Array.from(document.querySelectorAll('.hide-site-nav')).forEach((el) => el.classList.remove('hide-site-nav'));  
        },
    };
};