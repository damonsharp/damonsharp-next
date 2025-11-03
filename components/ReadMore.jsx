"use client";

import React, { useState } from "react";
import EditorContent from "@/components/EditorContent";

const ReadMore = ({
	text,
	maxLength = 240
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (text.length <= maxLength) {
		return (
			<EditorContent>{text}</EditorContent>
		);
	}

	const toggleReadMore = () => {
		setIsExpanded(! isExpanded);
	};

	return (
		<div className={"flex flex-col gap-4 items-start"}>
			<EditorContent>{isExpanded ? text : text.substring(0, maxLength).trim() + "... "}</EditorContent>
			<button
				onClick={toggleReadMore}
				className="transition-all text-sm italic text-secondary hover:text-primary bg-none cursor-pointer underline hover:no-underline"
			>
				{isExpanded ? "< Show less" : "Read more >"}
			</button>
		</div>
	);
};

export default ReadMore;
