import NavigationMenuItem from "@/components/NavigationMenuItem";
import MAIN_NAV_QUERY from "@/lib/queries/getMainNavMenu";
import { flatListToHierarchical } from "@/lib/utils";
import { query } from "@/lib/apolloClient";

export default async function NavigationMenu ({
	desktop = true,
	setSheetOpen
}) {
	const { data } = await query({ query: MAIN_NAV_QUERY });

	const menuItems = flatListToHierarchical(
		data?.menu?.menuItems.nodes || [],
		{ childrenKey: "childItems" }
	);

	return (
		<nav className={`${desktop && "hidden sm:flex sm:justify-center sm:items-center"} uppercase`}>
			<ul className={`grid ${desktop ? "grid-flow-col gap-18" : "grid-flow-row gap-4"} justify-center items-center text-center`}>
				{menuItems && menuItems.map(menuItem => (
					<NavigationMenuItem key={menuItem.id} menuItem={menuItem} desktop={desktop}
					                    setSheetOpen={setSheetOpen}/>
				))}
			</ul>
		</nav>
	);
}
