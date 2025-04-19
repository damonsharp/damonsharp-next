"use client";
import { sendEmail } from "@/app/utils";
import { useState } from "react";

const ContactForm = () => {
	const [data, setData] = useState({});

	const handleContactForm = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		sendEmail(formData);
	};

	const updateFormData = value => {
		const newFormData = {
			...data,
			...value
		};

		setData(newFormData);
	};

	return (
		<>
			<h1 className="font-bold text-4xl mb-10">Get in Touch</h1>
			<form className="" onSubmit={handleContactForm}>
				<div className="">
					<label className="block" htmlFor="name">Full Name</label>
					<input
						className="p-3 mt-1 mb-3 w-full rounded-sm border border-neutral"
						type="text"
						id="fname"
						value={data?.fname ?? ""}
						onChange={e => updateFormData({ fname: e.target.value })}
						required
					/>
				</div>
				<div className="form-control">
					<label className="mt-5 block" htmlFor="email">Email Address</label>
					<input
						className="p-3 mt-1 w-full rounded-sm border border-neutral"
						type="email"
						id="email"
						value={data?.email ?? ""}
						onChange={e => updateFormData({ email: e.target.value })}
						required
					/>
				</div>
				<div className="form-control">
					<label className="mt-5 block" htmlFor="message">Message</label>
					<textarea
						className="p-3 mt-1 rounded-sm w-full h-48 border-2 border-neutral border border-neutral"
						id="message"
						value={data?.message ?? ""}
						onChange={e => updateFormData({ message: e.target.value })}
						required
					/>
				</div>
				<button className="bg-accent px-5 py-3 text-white rounded-sm mt-5">Send</button>
			</form>
		</>

	);
};

export default ContactForm;
