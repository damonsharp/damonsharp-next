import Link from "next/link";
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
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const SiteSheet = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="lg:hidden" asChild variant="ghost">
					<Link href="#">
						<MenuIcon className="inline"/>
					</Link>
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full">
				<SheetHeader className="p-0">
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<NavigationMenu classes="flex-col items-start justify-start lg:hidden"/>
				<ContactForm />
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default SiteSheet;
