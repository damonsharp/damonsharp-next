import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import EditorContent from "@/components/EditorContent";

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
			<blockquote className="flex flex-col sm:flex-row">
				<FontAwesomeIcon className="self-center sm:self-start flex-shrink-0 size-16"
				                 icon={faQuoteLeft}/>
				<EditorContent className="py-6">{content}</EditorContent>
			</blockquote>
			<p className="text-center font-bold">&#8764; {person} &ndash; {title}</p>
		</div>
	);
};

export default Recommendation;
