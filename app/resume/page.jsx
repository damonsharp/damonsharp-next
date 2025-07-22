"use client";

import Sidebar from "@/components/Sidebar";
import React from "react";
import PAGE_QUERY from "@/lib/queries/getPage";
import { useQuery } from "@apollo/client";
import EditorContent from "@/components/EditorContent";
import Spinner from "@/components/Spinner";

const ResumePage = () => {
	const {
		loading,
		error,
		data
	} = useQuery(PAGE_QUERY, {
		variables: { "id": "resume" }
	});

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
		<div className="bg-secondary text-neutral -mt-6">
			<div className="inner-wide md:grid md:grid-cols-4 py-10">
				<EditorContent title={title} html={content}/>
				<Sidebar className="md:col-span-1 py-6 md:p-6 min-h-max">
					<h3 className="text-neutral">This is an aside component.</h3>
				</Sidebar>
			</div>
		</div>
	);
};

export default ResumePage;
