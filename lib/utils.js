"use strict";

import parse from "html-react-parser";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import sanitizeHtml from "sanitize-html";

export function cn (...inputs) {
	return twMerge(clsx(inputs));
}

export const flatListToHierarchical = (
	data = [],
	{
		idKey = "key",
		parentKey = "parentId",
		childrenKey = "children"
	} = {}
) => {
	const tree = [];
	const childrenOf = {};
	data.forEach((item) => {
		const newItem = { ...item };
		const {
			[ idKey ]: id,
			[ parentKey ]: parentId = 0
		} = newItem;
		childrenOf[ id ] = childrenOf[ id ] || [];
		newItem[ childrenKey ] = childrenOf[ id ];
		parentId
			? (
				childrenOf[ parentId ] = childrenOf[ parentId ] || []
			).push(newItem)
			: tree.push(newItem);
	});
	return tree;
};

export const escHtml = (content) => {
	const cleaned = sanitizeHtml(content);

	return parse(content);
};

export const formatEmploymentDate = (date) => {
	const newDate = new Date(date);
	const month = newDate.toLocaleString("en-US", { month: "long" });
	const year = newDate.getFullYear();

	return `${month} ${year}`;
};

