import Mailgun from "mailgun.js";
import FormData from "form-data";

export const sendEmail = ( formData ) => {
	const mailgun = new Mailgun( FormData );
	const mg      = mailgun.client( {
		username: "api",
		key: process.env.MAILGUN_API_KEY
	} );

};