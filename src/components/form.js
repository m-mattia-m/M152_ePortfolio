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
            /**
             * @type string
             */
            message: "",
            /**
             * @type boolean
             */
            demoLogin: false,
            /**
             * @type boolean
             */
            demoPresentation: false,
        },
        /**
         * onFormSubmit
         * @param {MouseEvent} $event
         */
        async onFormSubmit($event) {
            var demoLoginText = ""
            if (this.form.demoLogin) {
                 demoLoginText = "Wir melden uns für den Demo-Zugang bei dir. \n"
                 console.log(demoLoginText)
             }
            var demoPresentationText = ""
            if (this.form.demoPresentation) {
                demoPresentationText = "Wir melden uns für eine Demo-Präsentation bei dir. \n"
            }
            console.log(this.form);
            var message = "Hallo,\n\nDu wurdest erfolgreich auf unserer Liste angemeldet. \n\nDeine Daten:\n" +
                "Name: " + this.form.firstname + " " + this.form.lastname + "\n" +
                "Firma: " + this.form.company + "\n" +
                "E-Mail: " + this.form.email + "\n" +
                ((this.form.telephone !== "") ? "Telefon: " + this.form.telephone + "\n" : "") +
                ((this.form.message !== "") ? "Nachricht: " + this.form.message + "\n" : "") +
                demoLoginText + demoPresentationText +
                "\n\nFreundliche Grüsse \nSocialChat-Team";

            let response = await sendEmail(this.form.email, message)
            console.log(response)
            if (response.status == 200) {
                this.showAlertSuccess("Du wurdest erfolgreich angemeldet, bitte prüfe dein E-Mail-Postfach nach dem Bestätigungsmail.")
            } else {
                this.showAlertError("Es ist ein Fehler aufgetreten, bitte schreibe uns ein <u><b><a href='mailto:hi@socialchat.io'>E-Mail</a></b></u> um dich anzumelden.")
            }
        },
        showAlertSuccess(message) {
            this.alertSuccessText = message
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