/**
 * send a Email to the API
 * @param {FormData} from
 * @returns { httpStatus | null}
 */
export async function sendEmail(email, message) {
    fetch('https://emailing-service.one.nodes.upcraft.li/api/v1/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'X6cQ6xa-DvzsWxxnAY-WSxFXRHkMloZdjhmNbU1CkywGC3Fznwv50qrEd4D4aET3lOIG_7m07mk6SbvWkUzMoh-oFYtJFV7l6L5WVxbwviAB-i_XHLo0gwIO04DcqXRow8hHRC85LRoNyIP49JMY9zMdkH-fccd33yzzfcOoiiw='
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