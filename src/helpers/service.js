/**
 * send a Email to the API
 * @param {FormData} from
 * @returns { httpStatus | null}
 */
export function sendEmail(email, message) {
    fetch('http://localhost:8080/api/v1/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'viKGXC3DbMARMh7YdZoxDl5fZ7AI0r-Jatc82sZ8Y1fOtL05OTYxm8K9CDmm-Tt6E_SoDODs46bag8J9VwuPHV1G3tSjJgZKSMFK91dTNUdrsfoEPMf_bOKxgTkG7MuwFlTaf3pMDokp6W9spTRtZOJHooi60w69h-xsoc-5k5k='
            },
            body: JSON.stringify({
                keyword: "socialchat",
                email: email,
                subject: "Newsletter bestätigung",
                message: message,
                ssl: true,
                contentType: "text/plain"
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            return 200
        })
        .catch((error) => {
            console.error('Error:', error);
            return 500
        });
}