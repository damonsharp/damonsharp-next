"use client";

import React, { useState } from "react";
import EditorContent from "@/components/EditorContent";
import { escHtml } from "@/lib/utils";

const ReadMore = ({
	text,
	maxLength = 240
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const readMoreText = isExpanded ? "Read less &#8593;" : "Read more &#8595;";

	if (text.length <= maxLength) {
		return (
			<EditorContent>{text}</EditorContent>
		);
	}

	const toggleReadMore = () => {
		setIsExpanded(! isExpanded);
	};

	return (
		<div className="flex flex-col gap-4 items-start">
			<EditorContent>
				{isExpanded ? text : text.substring(0, maxLength).trim() + " ... "}</EditorContent>
			<button
				onClick={toggleReadMore}
				className="transition-all text-xs text-secondary hover:text-primary bg-none cursor-pointer no-underline hover:underline"
			>
				{escHtml(readMoreText)}
			</button>
		</div>
	);
};

export default ReadMore;
