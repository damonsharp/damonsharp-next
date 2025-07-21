"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
	const paths = usePathname();
	const pathNames = paths.split('/').filter( path => path);

	return;
};

export default Breadcrumbs;
