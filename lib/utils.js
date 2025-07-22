"use strict";

import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export const escHtml = (content, htmlTag = "") => {
	content = content?.replace(/<p>\s*<\/p>/ig, "");
	content = content?.replace(/<p\s*\/>/ig, "");
	return (
		parse(DOMPurify.sanitize(content))
	);
};

export const getGradientPerPathname = (pathname) => {
	let gradient = null;

	switch (pathname) {
		case "/projects":
			gradient = "bg-linear-[178deg,var(--color-primary)_70%,var(--color-accent)_calc(70%+2px)]";
			break;

		case "/resume":
			gradient = "bg-linear-[178deg,var(--color-primary)_70%,var(--color-secondary)_calc(70%+2px)]";
			break;

		default:
			gradient = "bg-linear-[178deg,var(--color-primary)_70%,var(--color-neutral)_calc(70%+2px)]";
	}

	return gradient;

};

