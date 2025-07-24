"use client";

import React from "react";
import {
	cn,
	escHtml
} from "@/lib/utils";

const EditorContent = ({
	children,
	className
}) => {
	return (
		<div className={cn("flex flex-col", className)}>{escHtml(children)}</div>
	);
};

export default EditorContent;
