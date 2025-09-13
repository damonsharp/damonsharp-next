"use server";

import ContactToAdmin from "@/emails/ContactToAdmin";
import ContactToSender from "@/emails/ContactToSender";
import { contactFormSchema } from "@/lib/validators";
import { Resend } from "resend";
import { z } from "zod";

export async function sendEmail(prevState, formData) {
	const fullName = formData.get("fullName");
	const email = formData.get("email");
	const message = formData.get("message");
	const resend = new Resend(process.env.RESEND_API_KEY);
	const validatedFields = contactFormSchema.safeParse({
		fullName,
		email,
		message,
	});

	if (!validatedFields.success) {
		const errors = z.flattenError(validatedFields.error);

		return {
			...prevState,
			errors,
			fullName,
			email,
			message,
		};
	}

	try {
		// Send message to myself.
		const { data, error: resendError } = await resend.emails.send({
			from: process.env.RESEND_FROM,
			to: [process.env.RESEND_TO],
			subject: "Contact from personal website",
			react: ContactToAdmin({
				fullName,
				message,
			}),
		});

		if (resendError) {
			return {
				...prevState,
				errors: resendError,
				formMessage: `Sorry, ${fullName} but we couldn't send your email at this time.`,
			};
		}

		// Send response to sender.
		const { senderData, error: senderResendError } = await resend.emails.send({
			from: process.env.RESEND_FROM,
			to: email,
			subject: "Thanks for reaching out!",
			react: ContactToSender({
				fullName,
				message,
			}),
		});

		return {
			...prevState,
			errors: {},
			formMessage: `Message sent! Thanks, ${fullName} for reaching out. I'll be in touch soon.`,
		};
	} catch (e) {
		return {
			...prevState,
			formMessage: e.message,
		};
	}
}
