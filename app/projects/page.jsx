"use client";

import { useQuery } from "@apollo/client";
import Spinner from "@/components/Spinner";
import PROJECTS_QUERY from "@/lib/queries/getProjects";
import Projects from "@/components/Projects";
import ContainerWide from "@/components/ContainerWide";
import ContainerNarrow from "@/components/ContainerNarrow";
import { escHtml } from "@/lib/utils";
import React from "react";

// export const metadata = {
// 	title: "Projects"
// };

const ProjectsPage = () => {
	const title = "Recent Projects";
	const {
		loading,
		error,
		data
	} = useQuery(PROJECTS_QUERY);

	if (loading) {
		return (
			<Spinner/>
		);
	}

	if (error) {
		return (
			<p>Error : {error.message}</p>
		);
	}

	const { content } = data?.page;

	return (
		<section className="bg-accent -mt-6">
			<ContainerNarrow className="2xl:items-center 2xl:gap-10 py-10 sm:px-0">
				<h1 className="">{title}</h1>
				<div className="flex flex-col">{escHtml(content)}</div>
			</ContainerNarrow>
			<ContainerWide>
				<Projects projects={data?.projects?.nodes}/>
			</ContainerWide>
		</section>
	);
};

export default ProjectsPage;
