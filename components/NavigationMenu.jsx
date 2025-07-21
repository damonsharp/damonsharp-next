"use client";

import NavigationMenuItem from "@/components/NavigationMenuItem";
import { useQuery } from "@apollo/client";
import MAIN_NAV_QUERY from "@/lib/queries/getMainNavMenu";
import { flatListToHierarchical } from "@/lib/utils";
import NavigationSkeleton from "@/components/NavigationSkeleton";

function NavigationMenu ({
	desktop = true,
	setSheetOpen
}) {
	const {
			  loading,
			  error,
			  data
		  } = useQuery(MAIN_NAV_QUERY);

	if (loading) {
		return (
			<NavigationSkeleton desktop={desktop}/>
		);
	}

	if (error) {
		return null;
	}

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

export default NavigationMenu;
