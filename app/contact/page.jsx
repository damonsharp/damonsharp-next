"use client";

import ContactForm from "@/components/ContactForm";
import { useQuery } from "@apollo/client";
import PAGE_QUERY from "@/lib/queries/getPage";
import Spinner from "@/components/Spinner";
import React from "react";
import ContainerNarrow from "@/components/ContainerNarrow";
import { escHtml } from "@/lib/utils";

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
		<section className="bg-neutral -mt-6 py-10">
			<ContainerNarrow className="gap-18">
				<h1 className="">Let's Start a Conversation</h1>
				<div className="flex flex-col">{escHtml(content)}</div>
				<ContactForm/>
			</ContainerNarrow>
		</section>
	);
};

export default ContactPage;
