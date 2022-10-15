import { stringify } from "postcss";
import { getSectionCordinates, scrollTo } from "../helpers/scroll";
import { sendEmail } from "../helpers/service"

window.formComponent = () => {
    return {
        /**
         * @type boolean
         */
        alertError: false,
        /**
         * @type boolean
         */
        alertSuccess: false,
        /**
         * @type string
         */
        alertErrorText: "",
        /**
         * @type string
         */
        alertSuccessText: "",

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

            var message = "Hallo,\n\nDu wurdest erfolgreich auf unserer Liste angemeldet. \n\nDeine Daten:\n" +
                "Name: " + this.form.firstname + " " + this.form.lastname + "\n" +
                "E-Mail: " + this.form.email + "\n" +
                "Telefon: " + this.form.telephone + "\n" +
                "Firma: " + this.form.company + "\n" +
                "\n\nFreundliche Grüsse \nSocialChat-Team";
            var httpStatus = sendEmail(this.form.email, message)
            console.log("httpStatus: " + httpStatus)
            if (httpStatus == 200) {
                this.showAlertSuccess("Du wurdest erfolgreich angemeldet, bitte prüfe dein E-Mail-Postfach nach dem Bestätigungsmail. <u><b><a href='mailto:hi@socialchat.io'>E-Mail</a></b></u>")
            } else {
                this.showAlertError("Es ist ein Fehler aufgetreten, bitte schreibe uns ein <u><b><a href='mailto:hi@socialchat.io'>E-Mail</a></b></u> um dich anzumelden.")
            }
            console.log("request fertig")
        },
        showAlertSuccess(message) {
            this.alertSuccesstext = message
            this.alertSuccess = true
            console.log("alert-success")
            setTimeout(function() {
                this.alertSuccess = false
                console.log("alert-success - later")
            }, 5000);
        },

        showAlertError(message) {
            this.alertErrorText = message
            this.alertError = true
            console.log("alert-error")
            setTimeout(function() {
                this.alertError = false
                console.log("alert-error - later")
            }, 5000);
        },
    };
};