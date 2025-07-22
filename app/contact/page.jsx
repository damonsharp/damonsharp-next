"use client";

import ContactForm from "@/components/ContactForm";
import EditorContent from "@/components/EditorContent";
import { useQuery } from "@apollo/client";
import PAGE_QUERY from "@/lib/queries/getPage";
import Spinner from "@/components/Spinner";
import React from "react";

const ContactPage = () => {
	const {
		loading,
		error,
		data
	} = useQuery(
		PAGE_QUERY,
		{
			variables: { "id": "contact" }
		}
	);

	if (loading) {
		return <Spinner/>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const {
		title,
		content
	} = data?.page;
	return (
		<section className="bg-neutral -mt-6 flex flex-col py-10">
			<div className="inner">
				<EditorContent title="Get In Touch" html={content}/>
				<ContactForm/>
			</div>
		</section>
	);
};

export default ContactPage;
