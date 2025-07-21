"use client";

import { useQuery } from "@apollo/client";
import Spinner from "@/components/Spinner";
import EditorContent from "@/components/EditorContent";
import PROJECTS_QUERY from "@/lib/queries/getProjects";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
	const title = "Recent Projects";
	const {
			  loading,
			  error,
			  data
		  }     = useQuery(PROJECTS_QUERY);

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
			<div className="inner-wide py-10 px-6 sm:px-0">
				<EditorContent title={title} html={content}/>
				<Projects projects={data?.projects?.nodes}/>
			</div>
		</section>
	);
};

export default ProjectsPage;
