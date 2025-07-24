import getProject from "@/lib/queries/getProject";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerNarrow from "@/components/ContainerNarrow";
import EditorContent from "@/components/EditorContent";
import React from "react";
import GalleryImages from "@/components/GalleryImages";

export async function generateMetadata ({ params }) {
	const { slug } = await params;
	const { project } = await getProject(slug);

	return {
		title: `Project: ${project.title}`
	};
}

export default async function Project ({ params }) {
	const { slug } = await params;
	const { project } = await getProject(slug);

	const {
		id,
		title,
		content,
		projectMetadata
	} = project;

	const {
		images,
		contribution,
		techStack,
		liveUrl
	} = projectMetadata;

	return (
		<article className={`project-${id} py-12`}>
			<ContainerNarrow>
				<section className="flex flex-col gap-2 mb-8">
					<h1>{title}</h1>
					{content && (
						<EditorContent>{content}</EditorContent>
					)}
					<GalleryImages project={project} images={images}/>
				</section>
				<section className="flex flex-col">
					{contribution && (
						<div>
							<h2 className="text-lg">Contribution:</h2>
							<EditorContent>{contribution}</EditorContent>
						</div>
					)}
					{techStack && (
						<div>
							<h2 className="text-lg">Tech stack:</h2>
							<p>{techStack}</p>
						</div>
					)}
					{liveUrl && (
						<Button asChild
						        className="max-w-max bg-primary text-neutral hover:bg-accent hover:text-primary px-5 py-4 rounded mt-5 cursor-pointer">
							<a href={liveUrl} target="_blank" rel="noopener">
								Visit Live Site <FontAwesomeIcon icon={faExternalLink}/>
							</a>
						</Button>
					)}
				</section>
			</ContainerNarrow>
		</article>
	);
}
