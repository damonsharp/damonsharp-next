import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
	cn,
	escHtml
} from "@/lib/utils";

const Recommendation = ({
	recommendation,
	className
}) => {
	const {
		content,
		person,
		title
	} = recommendation;

	return (
		<div
			className={`${cn("flex flex-col gap-10 justify-between rounded-md border-2 border-primary p-12", className)}`}>
			<blockquote className="flex flex-col sm:flex-row gap-2">
				<FontAwesomeIcon className="sm:self-start text-[60px] pr-3" icon={faQuoteLeft}/>
				<div className="py-6 flex flex-col">{escHtml(content)}</div>
			</blockquote>
			<p className="text-center font-bold">&#8764; {person} &ndash; {title}</p>
		</div>
	);
};

export default Recommendation;
