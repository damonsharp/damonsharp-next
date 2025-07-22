import React from "react";
import Recommendation from "@/components/Recommendation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { escHtml } from "@/lib/utils";
import ContainerWide from "@/components/ContainerWide";

const Recommendations = ({ recommendations }) => {
	const {
		recommendation,
		intro
	} = recommendations;
	return (
		<section>
			<ContainerWide className="py-24">
				<h2 className="text-center">
					<FontAwesomeIcon className="pr-2" icon={faThumbsUp}/> Colleague Recommendations
				</h2>
				<div className="text-center mb-8 flex flex-col gap-2">{escHtml(intro)}</div>
				<div className="grid grid-cols-1 xl:grid-cols-2">
					{recommendation.map((item, i) => (
						<Recommendation key={item.person} recommendation={item}
						                className={recommendation.length === i + 1 ? "xl:col-span-2" : ""}/>
					))}
				</div>
			</ContainerWide>
		</section>
	);
};

export default Recommendations;
