import React from "react";
import ContainerNarrow from "@/components/ContainerNarrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import EditorContent from "@/components/EditorContent";

const ResumeIntro = ({
	title,
	subtitle,
	content
}) => {
	return (
		<section className="bg-secondary text-neutral -mt-6 py-10">
			<ContainerNarrow className="flex flex-col gap-8 sm:gap-2">
				<div className="flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center justify-between">
					<h1 className="text-neutral w-full">{title}</h1>
					<Button
						asChild
						className="bg-accent text-primary hover:bg-neutral hover:text-primary px-5 py-4 rounded-sm w-fit"
					>
						<Link href={`/DamonSharpResume.pdf`} download={true} className="flex items-center">
							<span>Download PDF</span>
							<FontAwesomeIcon icon={icon.faArrowAltCircleDown}/>
						</Link>
					</Button>
				</div>
				<h2 className="text-neutral text-lg">{subtitle}</h2>
				<EditorContent>{content}</EditorContent>
			</ContainerNarrow>
		</section>
	);
};

export default ResumeIntro;
