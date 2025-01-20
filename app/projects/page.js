"use client";

import { useQuery } from "@apollo/client";
import Project from "@/components/Project";
import Spinner from "@/components/Spinner";
import EditorContent from "@/components/EditorContent";
import PROJECTS_QUERY from '@/app/queries/getProjects';

export default function Projects () {
	const { loading, error, data } = useQuery(PROJECTS_QUERY);

	if (loading) {
		return <Spinner/>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const { excerpt } = data?.page;

	return (
		<>
			<EditorContent title="Projects" html={excerpt}/>
			<section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
				{data.projects.nodes.map((project) => (
					<Project key={project.id} project={project}/>
				))}
			</section>
		</>
	);
}
