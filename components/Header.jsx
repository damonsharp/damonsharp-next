"use client";

import "@/assets/styles/global.css";
import { raleway } from "@/assets/fonts/fonts.js";
import NavigationMenu from "@/components/NavigationMenu";
import SiteLogo from "@/components/SiteLogo";
import SiteSheet from "@/components/SiteSheet";

const Header = () => {
	return (
		<header className="bg-primary">
			<div className="grid items-center">
				<div className="grid grid-flow-col auto-cols-max justify-center items-center gap-2 text-3xl font-bold pt-5 pb-5">
					<span>Damon Sharp</span>
					<SiteLogo width={47} height={50} prioritize={true}/>
					<span className={raleway.className}>Web Engineer</span>
				</div>
				<NavigationMenu/>
			</div>
			<SiteSheet/>
		</header>
	);
};

export default Header;
