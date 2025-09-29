import NavigationMenu from "@/components/NavigationMenu";
import { query } from "@/lib/apolloClient";
import MAIN_NAV_QUERY from "@/lib/queries/getMainNavMenu";
import { flatListToHierarchical } from "@/lib/utils";
import SiteLogoBanner from "@/components/SiteLogoBanner";

export default async function Header() {
	const { data } = await query({ query: MAIN_NAV_QUERY });

	const menuItems = flatListToHierarchical(data?.menu?.menuItems.nodes || [], { childrenKey: "childItems" });

	return (
		<header className="bg-primary px-4 py-4 sm:pb-6 sm:px-0 relative z-1">
			<div className="grid items-center gap-2">
				<SiteLogoBanner menuItems={menuItems} />
				<NavigationMenu setSheetOpen={false} menuItems={menuItems} />
			</div>
		</header>
	);
}
