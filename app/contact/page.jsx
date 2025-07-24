import ContactForm from "@/components/ContactForm";
import getPage from "@/lib/queries/getPage";
import React from "react";
import ContainerNarrow from "@/components/ContainerNarrow";
import EditorContent from "@/components/EditorContent";

export async function generateMetadata () {
	return {
		title: "Contact"
	};
};

export default async function ContactPage () {
	const { page } = await getPage("contact");
	const { content } = page;

	return (
		<section className="-mt-6 py-10">
			<ContainerNarrow className="2xl:gap-10">
				<h1 className="">Let's Start a Conversation</h1>
				<EditorContent>{content}</EditorContent>
				<ContactForm/>
			</ContainerNarrow>
		</section>
	);
};
