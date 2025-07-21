import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const NavigationSkeleton = ({ desktop }) => (
	<nav className={`${desktop && "hidden sm:grid sm:justify-center"} uppercase`}>
		<ul className={`grid ${desktop ? "grid-flow-col gap-18" : "grid-flow-row gap-4"} justify-center items-center text-center`}>
			{[
				1,
				2,
				3,
				4
			].map((menuItem, i) => (
				<li key={i} className="text-center">
					<Skeleton
						className="min-w-[78px] min-h-[24px] text-center bg-transparent border border-dotted border-accent"/>
				</li>
			))}
		</ul>
	</nav>
);

export default NavigationSkeleton;
