import { getSectionCordinates, scrollTo } from "../helpers/scroll";
import { sendEmail } from "../helpers/service"
import { alertError } from "../main";

window.formComponent = () => {
    return {
        form: {
            /**
             * @type string
             */
            firstname: "",
            /**
             * @type string
             */
            lastname: "",
            /**
             * @type string
             */
            email: "",
            /**
             * @type string
             */
            telephone: "",
            /**
             * @type string
             */
            company: "",
        },
        /**
         * onFormSubmit
         * @param {MouseEvent} $event
         */
        onFormSubmit($event) {
            console.log(this.form);
            sendEmail(this.form)
            alertError = true
        },
    };
};