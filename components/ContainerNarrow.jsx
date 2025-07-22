import React from "react";
import { cn } from "@/lib/utils";

const ContainerNarrow = ({
	className,
	children
}) => {
	return (
		<div className={`${cn("max-w-11/12 md:max-w-3/5 2xl:max-w-2/5 m-auto flex flex-col", className)}`}>
			{children}
		</div>
	);
};

export default ContainerNarrow;
