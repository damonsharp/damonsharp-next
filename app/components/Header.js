import Image from "next/image";
import Link from "next/link";
import {
	Raleway
} from "next/font/google";
const raleway = Raleway( {
	subsets: [ "latin" ],
	display: "swap"
} );
import "../global.css";


const Header = () => {
	return (
		<header>
			<div className="logo">
				<span className="me">Damon Sharp</span>
				<Image
					id="logo-svg"
					className="logo"
					src="/dws-logo-orange.svg"
					alt="Damon Sharp Logo"
					width={47}
					height={50}
				/>
				<span className={raleway.className}>Web Engineer</span>
			</div>
			<nav>
				<ul>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/projects">Projects</Link></li>
					<li><Link href="/resume">Resume</Link></li>
					<li><Link href="/contact">Contact</Link></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;