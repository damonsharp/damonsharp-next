import React from "react";
import ContainerNarrow from "@/components/ContainerNarrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { escHtml } from "@/lib/utils";

const ResumeProjects = ({ projects }) => {
	const {
		sectionTitleIcon,
		sectionTitle,
		content,
		buttonIcon,
		button
	} = projects;
	return (
		<section className="bg-accent text-primary pt-12 pb-6">
			<ContainerNarrow>
				<h2 className="flex items-center gap-4">
					<FontAwesomeIcon icon={icon[ sectionTitleIcon ]} className="shrink-0 size-12"/>
					<span>{sectionTitle}</span>
				</h2>
				{escHtml(content)}
				<Button
					asChild
					className="bg-primary text-neutral hover:bg-secondary px-5 py-4 rounded-sm w-fit"
				>
					<Link href={button.url} className="flex items-center">
						<span>{button.title}</span>
						<FontAwesomeIcon icon={buttonIcon ? icon[ buttonIcon ] : icon.faArrowAltCircleRight}/>
					</Link>
				</Button>
			</ContainerNarrow>
		</section>
	);
};

export default ResumeProjects;
