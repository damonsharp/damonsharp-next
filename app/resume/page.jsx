"use client";

import Sidebar from "@/components/Sidebar";
import React from "react";
import PAGE_QUERY from "@/lib/queries/getPage";
import { useQuery } from "@apollo/client";
import EditorContent from "@/components/EditorContent";

const ResumePage = () => {
	const {
			  loading,
			  error,
			  data
		  } = useQuery(PAGE_QUERY, {
		variables: { "id": "resume" }
	});

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
		<div className="md:grid md:grid-cols-4 bg-secondary text-neutral -mt-6">
			<EditorContent title={title} html={content}/>
			<Sidebar className="md:col-span-1 py-6 md:p-6 min-h-max">
				<h3 className="text-neutral">This is an aside component.</h3>
			</Sidebar>
		</div>
	);
};

export default ResumePage;
