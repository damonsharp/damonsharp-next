import React from "react";
import ContainerWide from "@/components/ContainerWide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import { Hr } from "@react-email/components";

const ResumeHighlightsSkills = ({ highlightsSkills }) => {
	return (
		<section
			className="pt-12 pb-32 bg-linear-[177deg,var(--color-neutral)_95%,var(--color-primary)_calc(70%+2px)] md:bg-linear-[177deg,var(--color-neutral)_88%,var(--color-primary)_calc(70%+2px)]">
			<ContainerWide>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
					{highlightsSkills.column.map((column, i) => (
						<div className="flex flex-col" key={column.title}>
							<h2 className="flex gap-3 items-center">
								<FontAwesomeIcon icon={icon[ column.icon ]} className="flex-shrink-0 size-12"/>
								<span>{column.title}</span>
							</h2>
							<Hr/>
							<ul className={`flex flex-col ${0 === i ? "gap-8" : "gap-2"}`}>
								{column.skill.map(item => (
									<li className="flex items-center" key={item.content}>
										<FontAwesomeIcon
											icon={item.icon ? icon[ item.icon ] : icon.faChevronCircleRight}
											className="flex-shrink-0 size-5"/>
										<span>{item.content}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</ContainerWide>
		</section>
	);
};

export default ResumeHighlightsSkills;
