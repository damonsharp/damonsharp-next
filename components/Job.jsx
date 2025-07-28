import React from "react";
import { formatEmploymentDate } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

const Job = ({ job }) => {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-neutral">{job.jobTitle} @ {job.company}</h3>
			<p className="text-neutral text-md italic">
				{formatEmploymentDate(job.startDate)} &mdash; {"yes" == job.currentEmployer ? "current" : formatEmploymentDate(job.endDate)}
			</p>
			<ul className="flex flex-col gap-4 list-disc">
				{job.responsibilities.map(responsibility => (
					<li className="flex items-center" key={responsibility.task}>
						<FontAwesomeIcon
							icon={responsibility.icon ? icon[ responsibility.icon ] : icon.faChevronCircleRight}
							className="flex-shrink-0 size-5"/>
						<span>{responsibility.task}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Job;
