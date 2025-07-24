"use client";

import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
	const paths = usePathname();
	const pathNames = paths.split("/").filter(path => path);

};

export default Breadcrumbs;
