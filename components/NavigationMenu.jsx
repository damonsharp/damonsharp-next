import NavigationMenuItem from "@/components/NavigationMenuItem";

export default function NavigationMenu ({
	desktop = true,
	setSheetOpen,
	menuItems
}) {

	return (
		<nav className={`${desktop && "hidden sm:flex sm:justify-center sm:items-center"} uppercase mt-10 sm:mt-0`}>
			<ul className={`grid ${desktop ? "grid-flow-col gap-18" : "grid-flow-row gap-4"} justify-center items-center text-center`}>
				{menuItems && menuItems.map(menuItem => (
					<NavigationMenuItem key={menuItem.id} menuItem={menuItem} desktop={desktop}
					                    setSheetOpen={setSheetOpen}/>
				))}
			</ul>
		</nav>
	);
}
