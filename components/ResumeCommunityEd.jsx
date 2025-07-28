import React from "react";
import ContainerWide from "@/components/ContainerWide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

const ResumeCommunityEd = ({ communityEducation }) => {
	const { column } = communityEducation;

	return (
		<section
			className="text-primary pt-28 sm:pt-24 pb-12 bg-linear-[2deg,var(--color-neutral)_90%,var(--color-accent)_calc(90%+2px)] sm:bg-linear-[2deg,var(--color-neutral)_83%,var(--color-accent)_calc(83%+2px)]">
			<ContainerWide>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
					{column.map((item, i) => (
						<div key={i} className="flex flex-col">
							<h2 className="flex items-center gap-4">
								<FontAwesomeIcon icon={icon[ item.icon ]} className="shrink-0 size-12"/>
								<span>{item.title}</span>
							</h2>
							{"list" === item.contentType ? (
								<ul className="flex flex-col gap-3">
									{item.skill.map(entry => (
										<li key={entry.content} className="flex items-center gap-2">
											<FontAwesomeIcon
												icon={entry.icon ? icon[ entry.icon ] : icon.faChevronCircleRight}
												className="size-4 shrink-0"/>
											<span>{entry.content}</span>
										</li>
									))}
								</ul>
							) : (
								<div>{item.content}</div>
							)}
						</div>
					))}
				</div>
			</ContainerWide>
		</section>
	);
};

export default ResumeCommunityEd;
