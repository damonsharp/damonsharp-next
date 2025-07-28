import getProject from "@/lib/queries/getProject";
import {
	faChevronCircleLeft,
	faExternalLink
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerNarrow from "@/components/ContainerNarrow";
import EditorContent from "@/components/EditorContent";
import React from "react";
import GalleryImages from "@/components/GalleryImages";
import Link from "next/link";

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
		<article className={`project-${id} py-10`}>
			<ContainerNarrow>
				<section className="flex flex-col mb-8">
					<div className="flex items-center justify-between">
						<h1 className="mb-0">{title}</h1>
						{liveUrl && (
							<a className="text-secondary px-3 py-1 border border-neutral hover:border-secondary rounded hover:text-primary"
							   href={liveUrl}
							   target="_blank" rel="noopener">
								Visit Live Site <FontAwesomeIcon icon={faExternalLink}/>
							</a>
						)}
					</div>
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
					<Link className="flex items-center gap-2 hover:underline" href="/projects">
						<FontAwesomeIcon className="flex-shrink-0 size-4" icon={faChevronCircleLeft}/>
						<span>Back to Projects</span>
					</Link>
				</section>
			</ContainerNarrow>
		</article>
	);
}
