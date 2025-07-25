import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	faBriefcase,
	faDesktop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorContent from "@/components/EditorContent";
import React from "react";

const Project = ({
	project,
	className = ""
}) => {
	const {
		excerpt,
		title,
		slug,
		projectMetadata
	} = project;

	return (
		<article className={cn("grid grid-cols-1 lg:grid-cols-2", className)}>
			<figure className="">
				<Image
					src={projectMetadata?.images[ 0 ]?.image?.node?.sourceUrl}
					alt={projectMetadata?.images[ 0 ]?.image?.node?.altText}
					className="w-full"
					width={600}
					height={338}
					priority={true}
				/>
			</figure>
			<div className="h-full">
				<div className="flex flex-col h-full">
					<h3>{title}</h3>
					{excerpt && (
						<EditorContent>{excerpt}</EditorContent>
					)}
					{projectMetadata?.techStack && (
						<div>
							<h2 className="text-lg">Tech stack:</h2>
							<p>{projectMetadata?.techStack}</p>
						</div>
					)}
					<div className="flex gap-2 sm:gap-4 items-center">
						<Button asChild
						        className="bg-primary text-neutral hover:bg-secondary hover:text-neutral px-5 py-4 rounded-sm w-fit justify-self-end">
							<Link href={`/projects/${slug}`}>
								<FontAwesomeIcon icon={faDesktop}/> View Project Details
							</Link>
						</Button>
						<Button asChild
						        className="bg-neutral text-primary hover:bg-secondary hover:text-neutral px-5 py-4 rounded-sm w-fit justify-self-end">
							<Link href={`/projects`}>
								<FontAwesomeIcon icon={faBriefcase}/> View All Projects
							</Link>
						</Button>

					</div>
				</div>
			</div>
		</article>
	);
};

export default Project;
