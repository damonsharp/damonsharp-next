import React from "react";
import Recommendation from "@/components/Recommendation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ContainerWide from "@/components/ContainerWide";
import EditorContent from "@/components/EditorContent";

const Recommendations = ({ recommendations }) => {
	const {
		recommendation: recommendationItems,
		intro
	} = recommendations;

	return (
		<section className="bg-neutral">
			<ContainerWide className="py-10 2xl:py-24">
				<h2 className="flex items-center text-center justify-center">
					<FontAwesomeIcon className="size-10" icon={faThumbsUp}/>
					<span>Recommendations</span>
				</h2>
				<EditorContent className="text-center mb-8 flex gap-2">{intro}</EditorContent>
				<div className="flex flex-col gap-6 h-min">
					{recommendationItems.map((item, i) => (
						<Recommendation
							className={i % 2 === 0 ? "place-self-start" : "place-self-end"}
							key={item.person}
							recommendation={item}
						/>
					))}
				</div>
			</ContainerWide>
		</section>
	);
};

export default Recommendations;
