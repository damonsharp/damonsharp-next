"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationMenuItem ({
	menuItem,
	desktop,
	setSheetOpen
}) {
	const pathname = usePathname();

	return (
		<li className="transition-opacity ease-in duration-7000 from:opacity-0 to:opacity-100">
			<Link
				className={`${desktop ? "text-neutral" : "text-primary font-bold text-xl"} text-shadow text-shadow-2xs text-center text-sm hover:border-b-2 hover:border-b-accent ${pathname === menuItem.url ? "border-b-2 border-b-accent" : ""}`}
				href={menuItem.url}
				onClick={() => {
					if (! desktop) {
						setSheetOpen(false);
					}
				}}
			>
				{menuItem.label}
			</Link>
		</li>
	);
}

export default NavigationMenuItem;
