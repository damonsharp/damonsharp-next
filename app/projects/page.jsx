import PROJECTS_QUERY from "@/lib/queries/getProjects";
import Projects from "@/components/Projects";
import ContainerWide from "@/components/ContainerWide";
import ContainerNarrow from "@/components/ContainerNarrow";
import React from "react";
import { query } from "@/lib/apolloClient";
import EditorContent from "@/components/EditorContent";

export async function generateMetadata () {
	return {
		title: "Projects"
	};
}

export default async function ProjectsPage ({ params }) {
	const { slug } = await params;
	const { data } = await query({
		query: PROJECTS_QUERY,
		variables: {
			id: slug
		}
	});

	const {
		title,
		content
	} = data?.page;

	return (
		<>
			<section className="bg-neutral -mt-6">
				<ContainerNarrow className="2xl:items-center 2xl:gap-10 py-10 sm:px-0">
					<h1 className="">{title}</h1>
					<EditorContent>{content}</EditorContent>
				</ContainerNarrow>
			</section>
			<section className="bg-linear-[3deg,var(--color-accent)_85%,var(--color-neutral)_calc(70%+2px)] ">
				<ContainerWide>
					<Projects projects={data?.projects?.nodes}/>
				</ContainerWide>
			</section>
		</>
	);
}
