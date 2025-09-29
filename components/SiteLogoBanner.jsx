import SiteLogo from "@/components/SiteLogo";
import SiteSheet from "@/components/SiteSheet";

const SiteLogoBanner = ({ menuItems }) => {
	return (
		<div className="grid grid-cols-4 grid-rows-2 gap-x-3 gap-y-0 items-center text-center justify-around sm:grid-cols-none sm:grid-rows-1 sm:justify-center sm:items-center text-2xl font-bold pt-1 sm:max-w-max sm:m-auto">
			<span className="text-accent col-start-2 col-end-4 row-span-1 row-start-1 row-end-2 text-shadow-[0px_0px_4px_var(--color-primary)] sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-1">
				Damon Sharp
			</span>
			<SiteLogo
				className="col-start-1 col-end-2 row-span-2 animate-gyrate delay-500 sm:col-start-2 sm:col-end-2 sm:row-start-3 sm:row-end-1"
				width={75}
				height={75}
				prioritize={true}
			/>
			<span className="text-accent col-start-2 col-end-4 row-span-1 row-start-2 row-end-3 text-shadow-[0px_0px_4px_var(--color-primary)] text-lg text-center sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-1 sm:text-2xl sm:text-left">
				Web Engineer
			</span>
			<SiteSheet
				className="text-accent col-start-4 row-span-2 sm:col-start-none sm:col-end-none"
				menuItems={menuItems}
			/>
		</div>
	);
};

export default SiteLogoBanner;
