import Mailgun from "mailgun.js";
import FormData from "form-data";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

export const sendEmail = (formData) => {
	const mailgun = new Mailgun(FormData);
	const mg      = mailgun.client({
		username: "api",
		key: process.env.MAILGUN_API_KEY
	});

};

export const escHtml = (content, htmlTag = "") => {
	content = content?.replace(/<p>\s*<\/p>/ig, "");
	content = content?.replace(/<p\s*\/>/ig, "");
	return (
		parse(DOMPurify.sanitize(content))
	);
};
