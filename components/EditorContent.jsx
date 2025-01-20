import React from "react";
import { escHtml } from "@/app/utils";

const EditorContent = ({ title, html }) => {
	return (
		<>
			{title && (
				<h1 className="text-4xl mb-6">{title}</h1>
			)}

			{html && (
				escHtml(html)
			)}
		</>
	);
};

export default EditorContent;
