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

            /**
             * @type ScrollToOptions
             */
            const scrollToOptions = {
                left: 0,
                top: sectionCordinates.top - headerHeight - padding,
            };

            scrollTo(scrollToOptions);
        },
    };
};