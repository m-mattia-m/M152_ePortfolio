import {getSectionCordinates, navChange, navPadding, scrollTo} from "../helpers/scroll";

window.homeComponent = () => {
    return {
        /**
         * @type string
         */
        logoUrl: './assets/logo/sc-logo_v6_small.svg',
        /**
         * @type boolean
         */
        menuStatus: false,
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
            this.menuStatus = false;
            const sectionCordinates = getSectionCordinates(section);
            const headerHeight = header.clientHeight;

            Array.from(document.querySelectorAll('.nav-open-menu')).forEach((el) => el.classList.remove('nav-open-menu'));
            Array.from(document.querySelectorAll('.responsive-nav-container-open-menu')).forEach((el) => el.classList.remove('responsive-nav-container-open-menu'));
            Array.from(document.querySelectorAll('.menu-close-show')).forEach((el) => el.classList.remove('menu-close-show'));  
            Array.from(document.querySelectorAll('.hide-site-nav')).forEach((el) => el.classList.remove('hide-site-nav'));  

            /**
             * @type ScrollToOptions
             */
            const scrollToOptions = {
                left: 0,
                top: sectionCordinates.top - headerHeight - navPadding,
            };

            scrollTo(scrollToOptions);
        },
        /**
         * openMenu
         * @param {MouseEvent} $event
         */
        openMenu($event) {
            console.log("menu click");
            this.menuStatus = !this.menuStatus
            if (window.scrollY > navPadding) {
                console.log("hat abstand von 30px")
                Array.from(document.querySelectorAll('.hamburger-row')).forEach((el) => el.classList.add('hamburger-row-scroll'));
                if (!this.menuStatus){
                    Array.from(document.querySelectorAll('.hamburger-row')).forEach((el) => el.classList.add('hamburger-row-scroll'));
                } else {
                    Array.from(document.querySelectorAll('.hamburger-row-scroll')).forEach((el) => el.classList.remove('hamburger-row-scroll'));
                }
            } else {
                console.log("hat keinen abstand von 30px")
                Array.from(document.querySelectorAll('.hamburger-row-scroll')).forEach((el) => el.classList.remove('hamburger-row-scroll'));
            }

            if (this.menuStatus){
                document.getElementById("nav").classList.add("nav-open-menu");
                document.getElementById("responsive-nav-container").classList.add("responsive-nav-container-open-menu");
                document.getElementById("site-nav").classList.add("hide-site-nav");
                return
            }

            Array.from(document.querySelectorAll('.nav-open-menu')).forEach((el) => el.classList.remove('nav-open-menu'));
            Array.from(document.querySelectorAll('.responsive-nav-container-open-menu')).forEach((el) => el.classList.remove('responsive-nav-container-open-menu'));
            Array.from(document.querySelectorAll('.hide-site-nav')).forEach((el) => el.classList.remove('hide-site-nav'));
        },
    };
};
