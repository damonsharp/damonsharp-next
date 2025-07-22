import React from "react";
import { cn } from "@/lib/utils";

const ContainerWide = ({
	className,
	children
}) => {
	return (
		<div
			className={`${cn("max-w-11/12 xl:max-w-6/7 2xl:max-w-3/5 2xl:justify-around m-auto flex flex-col", className)}`}>
			{children}
		</div>
	);
};

export default ContainerWide;
