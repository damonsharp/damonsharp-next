import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EditorContent from "@/components/EditorContent";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
		<article
			className={cn("flex flex-col gap-2 bg-neutral text-primary border-2 border-gray-100 shadow-md rounded-lg overflow-clip mb-6 sm:mb-0 max-w-[600px]", className)}>
			<figure className="border-b-2 border-b-gray-100">
				<Image
					src={projectMetadata?.images[ 0 ]?.image?.node?.sourceUrl}
					alt={projectMetadata?.images[ 0 ]?.image?.node?.altText}
					width={600}
					height={338}
					priority={true}
				/>
			</figure>
			<div className="h-full">
				<div className="p-6 flex flex-col h-full">
					<h2 className="text-xl">{title}</h2>
					<EditorContent className="mb-auto">{excerpt}</EditorContent>
					<Button asChild
					        className="bg-primary text-neutral hover:bg-secondary px-5 py-4 rounded-sm w-fit">
						<Link href={`/projects/${slug}`} className="flex items-center">
							<span>View Project Details</span>
							<FontAwesomeIcon icon={faArrowAltCircleRight} className="size-4 shrink-0"/>
						</Link>
					</Button>
				</div>
			</div>
		</article>
	);
};

export default Project;
