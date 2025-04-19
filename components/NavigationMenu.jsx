"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationMenu () {
	const pathname = usePathname();

	return (
		<nav className="bg-tertiary uppercase grid justify-center py-3">
			<ul className="grid grid-flow-col gap-24 justify-center items-center">
				<li>
					<Link
						className={`text-white hover:border-b-2 hover:border-b-white ${pathname === "/" ? "border-b-2 border-b-white" : ""}`}
						href="/">Home</Link>
				</li>
				<li>
					<Link
						className={`text-white hover:border-b-2 hover:border-b-white ${pathname === "/about" ? "border-b-2 border-b-white" : ""}`}
						href="/about">About</Link>
				</li>
				<li>
					<Link
						className={`text-white hover:border-b-2 hover:border-b-white ${pathname === "/projects" ? "border-b-2 border-b-white" : ""}`}
						href="/projects">Projects</Link>
				</li>
				<li>
					<Link
						className={`text-white hover:border-b-2 hover:border-b-white ${pathname === "/contact" ? "border-b-2 border-b-white" : ""}`}
						href="/contact">Contact</Link>
				</li>
				<li>
					<Link
						className={`text-white hover:border-b-2 hover:border-b-white ${pathname === "/resume" ? "border-b-2 border-b-white" : ""}`}
						href="/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationMenu;
