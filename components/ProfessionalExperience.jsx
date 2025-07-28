import React from "react";
import ContainerNarrow from "@/components/ContainerNarrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import Job from "@/components/Job";

const ProfessionalExperience = ({ employment }) => {
	const {
		sectionTitle,
		jobEntry
	} = employment;
	return (
		<section className="bg-primary text-neutral pt-8 pb-18 xl:pt-18">
			<ContainerNarrow>
				<h2 className="flex items-center gap-4 text-neutral pb-8">
					<FontAwesomeIcon icon={icon[ employment.icon ]} className="shrink-0 size-10"/>
					<span>{sectionTitle}</span>
				</h2>
				{jobEntry.map((job, i) => (
					<div className="flex flex-col" key={i}>
						{i !== 0 && (
							<hr className="border border-accent"/>
						)}
						<Job job={job}/>
					</div>
				))}
			</ContainerNarrow>
		</section>
	);
};

export default ProfessionalExperience;
