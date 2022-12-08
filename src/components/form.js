import {sendEmail} from "../helpers/service"

window.formComponent = () => {
    return {
        /**
         * @type boolean
         */
        formLoad: false, /**
         * @type boolean
         */
        alertError: false, /**
         * @type boolean
         */
        alertSuccess: false, /**
         * @type string
         */
        alertErrorText: "", /**
         * @type string
         */
        alertSuccessText: "", form: {
            /**
             * @type string
             */
            firstname: "", /**
             * @type string
             */
            lastname: "", /**
             * @type string
             */
            email: "", /**
             * @type string
             */
            telephone: "", /**
             * @type string
             */
            company: "", /**
             * @type string
             */
            message: "", /**
             * @type boolean
             */
            demoLogin: false, /**
             * @type boolean
             */
            demoPresentation: false,
        },
        /**
         * onFormSubmit
         * @param {MouseEvent} $event
         */
        async onFormSubmit($event) {
            let fieldValidationStatus = this.checkRequiredFields()
            if (!fieldValidationStatus) {
                return;
            }


            this.formLoad = true;
            let demoLoginText = ""
            if (this.form.demoLogin) {
                demoLoginText = "Wir melden uns für den Demo-Zugang bei dir. \n"
            }
            var demoPresentationText = ""
            if (this.form.demoPresentation) {
                demoPresentationText = "Wir melden uns für eine Demo-Präsentation bei dir. \n"
            }
            var message = "Hallo,\n\nDu wurdest erfolgreich auf unserer Liste angemeldet. \n\nDeine Daten:\n" + "Name: " + this.form.firstname + " " + this.form.lastname + "\n" + "Firma: " + this.form.company + "\n" + "E-Mail: " + this.form.email + "\n" + ((this.form.telephone !== "") ? "Telefon: " + this.form.telephone + "\n" : "") + ((this.form.message !== "") ? "Nachricht: " + this.form.message + "\n" : "") + demoLoginText + demoPresentationText + "\n\nFreundliche Grüsse \nSocialChat-Team";

            let response = await sendEmail(this.form.email, message)
            if (response.status == 200) {
                this.showAlertSuccess("Du wurdest erfolgreich angemeldet, bitte prüfe dein E-Mail-Postfach nach dem Bestätigungsmail.")
            } else {
                this.showAlertError("Es ist ein Fehler aufgetreten, bitte schreibe uns ein <u><b><a href='mailto:hi@socialchat.io'>E-Mail</a></b></u> um dich anzumelden.")
            }
            this.formLoad = false;
        },
        /**
         * showAlertSuccess
         * @param {string} message
         */
        showAlertSuccess(message) {
            this.alertSuccessText = message
            this.alertSuccess = true

            setTimeout(() => {
                this.alertSuccess = false
            }, 5 * 1000);
        },
        /**
         * showAlertError
         * @param {string} message
         */
        showAlertError(message) {
            this.alertErrorText = message
            this.alertError = true

            setTimeout(() => {
                this.alertError = false
            }, 5 * 1000);
        },
        /**
         * checkRequiredFields
         * @return {boolean}
         */
        checkRequiredFields() {
            if (!this.isEmpty(this.form.firstname)) {
                this.showAlertError("Bitte fülle alle benötigten Felder aus.")
                return false;
            }
            if (!this.isEmpty(this.form.firstname)) {
                this.showAlertError("Bitte fülle alle benötigten Felder aus.")
                return false;
            }
            if (!this.isEmpty(this.form.lastname)) {
                this.showAlertError("Bitte fülle alle benötigten Felder aus.")
                return false;
            }
            if (!this.isEmpty(this.form.company)) {
                this.showAlertError("Bitte fülle alle benötigten Felder aus.")
                return false;
            }
            if (!this.isEmpty(this.form.email)) {
                this.showAlertError("Bitte fülle alle benötigten Felder aus.")
                return false;
            }
            return true;
        },
        /**
         * isEmpty
         * @param {string} str
         */
        isEmpty(str) {
            return !!str.trim().length;
        }
    };
};
