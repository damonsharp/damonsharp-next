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
			className={`${cn("flex flex-col gap-6 justify-between rounded-md border border-secondary shadow shadow-lg p-12 md:w-5/6", className)}`}>
			<blockquote className="flex flex-col sm:flex-row sm:gap-12">
				<FontAwesomeIcon className="self-center sm:self-start shrink-0 size-14!"
				                 icon={faQuoteLeft}/>
				<ReadMore className="py-6" text={content} maxLength={200}/>
			</blockquote>
			<p className="text-center font-bold">&#8764; {person} &ndash; {title}</p>
		</div>
	);
};

export default Recommendation;
