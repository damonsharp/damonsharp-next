import NavigationMenu from "@/components/NavigationMenu";
import SiteLogo from "@/components/SiteLogo";
import SiteSheet from "@/components/SiteSheet";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getGradientPerPathname } from "@/lib/utils";

export default async function Header ({ params }) {
	const { slug } = await params;
	const gradient = getGradientPerPathname(slug);

	return (
		<header
			className={`px-4 pt-2 sm:px-0 relative z-1 ${gradient}`}>
			<div className="grid items-center pb-20 gap-2">
				<div
					className="grid grid-cols-4 grid-rows-2 gap-2 items-center text-center justify-around sm:grid-cols-none sm:grid-rows-1 sm:justify-center sm:items-center sm:gap-2 text-2xl font-bold pt-1 max-w-max m-auto">
					<span
						className="text-accent col-start-2 col-end-4 row-span-1 row-start-1 row-end-2 text-shadow-[0px_0px_2px_var(--color-primary)] sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-1">Damon Sharp</span>
					<SiteLogo
						className="col-start-1 col-end-2 row-span-2 animate-gyrate sm:col-start-2 sm:col-end-2 sm:row-start-3 sm:row-end-1"
						width={75} height={75} prioritize={true}/>
					<span
						className="text-accent col-start-2 col-end-4 row-span-1 row-start-2 row-end-3 text-shadow-[0px_0px_2px_var(--color-primary)] text-lg text-center sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-1 sm:text-2xl sm:text-left">Web Engineer</span>
					<SiteSheet className="text-accent col-start-4 row-span-2 sm:col-start-none sm:col-end-none"/>
				</div>
				<NavigationMenu setSheetOpen={false}/>
			</div>
			<Breadcrumbs/>
		</header>
	);
};
