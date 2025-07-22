"use client";

import { sendEmail } from "@/actions/sendEmail";
import {
	useActionState,
	useEffect
} from "react";
import { Button } from "@/components/ui/button";
import { contactFormInitialState } from "@/lib/validators";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = ({ className }) => {
	const [formState, formAction, isPending] = useActionState(sendEmail, contactFormInitialState);

	useEffect(() => {
		console.log(formState);
	}, [formState]);

	return (
		<>
			{formState.formMessage ? (
				<div className="flex items-center p-6 border border-4 border-success rounded text-success text-lg">
					<FontAwesomeIcon icon={faCheckSquare} className="text-4xl"/>
					{formState.formMessage}
				</div>
			) : (
				<form className={className} action={formAction}>
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center">
						<div className="">
							<label className="block" htmlFor="fullName">Full Name</label>
							{formState.errors.fieldErrors?.fullName && (
								<p className="text-destructive my-2 text-sm">{formState.errors.fieldErrors.fullName[ 0 ]}</p>
							)}
							<input
								className="p-3 w-full rounded-xs border border-accent"
								type="text"
								id="fullName"
								name="fullName"
								defaultValue={formState.fullName}
								placeholder="What is your full name?"
								max={80}
								required
							/>
						</div>
						<div className="">
							<label className="block" htmlFor="email">Email Address</label>
							{formState.errors.fieldErrors?.email && (
								<p className="text-destructive my-2 text-sm">{formState.errors.fieldErrors.email[ 0 ]}</p>
							)}
							<input
								className="p-3 w-full rounded-xs border border-accent"
								type="email"
								id="email"
								name="email"
								defaultValue={formState.email}
								placeholder="What is your email address?"
								max={80}
								required
							/>
						</div>
					</div>
					<div>
						<label className="mt-5 block" htmlFor="message">Message</label>
						{formState.errors.fieldErrors?.message && (
							<p className="text-destructive my-2 text-sm">{formState.errors.fieldErrors.message[ 0 ]}</p>
						)}
						<textarea
							className="p-3 mt-1 rounded-xs w-full h-64 border-accent border border-accent"
							id="message"
							name="message"
							defaultValue={formState.message}
							placeholder="What would you like to say?"
							required
						/>
					</div>
					<Button
						className="bg-primary text-neutral hover:bg-accent px-5 py-4 rounded mt-5 cursor-pointer"
						disabled={isPending}
					>
						{isPending ? "Sending" : "Send Message"}
					</Button>
				</form>
			)}
		</>

	);
};

export default ContactForm;
