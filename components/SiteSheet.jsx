"use client";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import NavigationMenu from "@/components/NavigationMenu";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const SiteSheet = ({ className }) => {
	const [sheetOpen, setSheetOpen] = useState(false);
	return (
		<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
			<SheetTrigger asChild className={cn(className, "sm:hidden")}>
				<div>
					<MenuIcon className="m-auto hover:cursor-pointer text-accent"/>
				</div>
			</SheetTrigger>
			<SheetContent className="w-full">
				<SheetHeader className="p-0">
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<NavigationMenu sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} desktop={false}
				                className="flex-col items-start justify-start"/>
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default SiteSheet;
