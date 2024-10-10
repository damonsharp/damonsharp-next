"use client";
import styles from "../contact/styles.module.css";
import { useState } from "react";
import { sendEmail } from "@/app/utils";

const ContactForm = () => {
	const [ data, setData ] = useState( {} );

	const handleContactForm = ( event ) => {
		event.preventDefault();
		const formData = new FormData( event.target );

		sendEmail( formData );
	};

	const updateFormData = value => {
		const newFormData = {
			...data,
			...value
		};

		setData( newFormData );
	};

	return (
		<form className="contact-form" onSubmit={handleContactForm}>
			<div className={styles[ "form-control" ]}>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					value={data.message ?? ""}
					onChange={e => updateFormData( { message: e.target.value } )}
					required
				/>
			</div>
			<div className={styles[ "form-control" ]}>
				<label htmlFor="fname">First Name</label>
				<input
					type="text"
					id="fname"
					value={data.fname ?? ""}
					onChange={e => updateFormData( { fname: e.target.value } )}
					required
				/>
			</div>
			<div className={styles[ "form-control" ]}>
				<label htmlFor="lname">Last Name</label>
				<input
					type="text"
					id="lname"
					value={data.lname ?? ""}
					onChange={e => updateFormData( { lname: e.target.value } )}
					required
				/>
			</div>
			<div className={styles[ "form-control" ]}>
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					id="email"
					value={data.email ?? ""}
					onChange={e => updateFormData( { email: e.target.value } )}
					required
				/>
			</div>
			<button>Send</button>
		</form>
	);
};

export default ContactForm;