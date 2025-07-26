import React from "react";
import Recommendation from "@/components/Recommendation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ContainerWide from "@/components/ContainerWide";
import EditorContent from "@/components/EditorContent";

const Recommendations = ({ recommendations }) => {
	const {
		recommendation,
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
				<div className="grid grid-cols-1 xl:grid-cols-2">
					{recommendation.map((item, i) => (
						<Recommendation
							key={item.person}
							recommendation={item}
							className={recommendation.length === i + 1 ? "xl:col-span-2" : ""}
						/>
					))}
				</div>
			</ContainerWide>
		</section>
	);
};

export default Recommendations;
