import React from "react";
import Project from "@/components/Project";
import { cn } from "@/lib/utils";

const Projects = ({
	className,
	projects
}) => {
	return (
		projects && (
			<section className={`${cn("", className)}`}>
				<div className="sm:grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-4 justify-items-start">
					{projects.map((project) => (
						<Project key={project.id} project={project}/>
					))}
				</div>
			</section>
		)
	);
};

export default Projects;
