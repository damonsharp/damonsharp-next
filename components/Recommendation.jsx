import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import ReadMore from "@/components/ReadMore";

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
			className={`${cn("flex flex-col gap-10 justify-between rounded-md border shadow shadow-lg border-secondary p-12", className)}`}>
			<blockquote className="flex flex-col sm:flex-row">
				<FontAwesomeIcon className="self-center sm:self-start shrink-0 size-14!"
				                 icon={faQuoteLeft}/>
				<ReadMore className="py-6" text={content}/>
			</blockquote>
			<p className="text-center font-bold">&#8764; {person} &ndash; {title}</p>
		</div>
	);
};

export default Recommendation;
