import {z} from "zod";

export const contactFormSchema = z.object({
	fullName: z.string().min(3, "It would be helpful to have your name."),
	email: z.email("I need a valid email address in order to reply to you."),
	message: z.string().min(10, "What would you like to say?"),
	errors: z.object().optional(),
	formMessage: z.string().optional()
});

export const contactFormInitialState = {
	fullName: "",
	email: "",
	message: "",
	errors: {},
	formMessage: ""
};
