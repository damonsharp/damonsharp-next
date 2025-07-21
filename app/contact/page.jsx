"use client";

import ContactForm from "@/components/ContactForm";
import EditorContent from "@/components/EditorContent";
import { useQuery } from "@apollo/client";
import PAGE_QUERY from "@/lib/queries/getPage";

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
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const {
			  title,
			  content
		  } = data?.page;
	return (
		<section className="flex flex-col inner py-10">
			<EditorContent title="Get In Touch" html={content}/>
			<ContactForm/>
		</section>
	);
};

export default ContactPage;
