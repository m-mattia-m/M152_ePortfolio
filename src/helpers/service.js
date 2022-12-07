/**
 * send email to the API
 * @param {FormData} from
 * @return {json}
 */
export async function sendEmail(email, message) {
    return await fetch('https://emailing-service.one.nodes.upcraft.li/api/v1/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'X6cQ6xa-DvzsWxxnAY-WSxFXRHkMloZdjhmNbU1CkywGC3Fznwv50qrEd4D4aET3lOIG_7m07mk6SbvWkUzMoh-oFYtJFV7l6L5WVxbwviAB-i_XHLo0gwIO04DcqXRow8hHRC85LRoNyIP49JMY9zMdkH-fccd33yzzfcOoiiw='
        },
        body: JSON.stringify({
            keyword: "socialchat",
            email: email,
            subject: replaceUmlauts("Newsletter bestätigung"),
            message: message,
            ssl: true,
            contentType: "text/plain; charset=\"utf-8\""
        }),
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        return error
    });
}

function replaceUmlauts(s){
    s = s.replace("ä","ae");
    s = s.replace("ö","oe");
    s = s.replace("ü","ue");
    s = s.replace("Ä","Ae");
    s = s.replace("Ö","Oe");
    s = s.replace("Ü","Ue");
    return s;
}