import React from "react";
import {
	cn,
	escHtml
} from "@/lib/utils";

const EditorContent = ({
	title,
	html,
	className
}) => {
	return (
		<section className={cn("", className)}>
			{title && (
				<h1>{title}</h1>
			)}

			{html && (
				<div className="content flex flex-col">{escHtml(html)}</div>
			)}
		</section>
	);
};

export default EditorContent;
