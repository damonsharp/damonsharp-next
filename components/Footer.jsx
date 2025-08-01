import SiteLogo from "@/components/SiteLogo";
import { cn } from "@/lib/utils";
import SocialIconsList from "@/components/SocialIconsList";

const Footer = ({ className }) => {
	const year = ( new Date() ).getFullYear();

	return (
		<footer
			className={cn("text-neutral bg-secondary p-4 -mt-6 items-end border-t border-accent", className)}>
			<div className="md:container md:mx-auto">
				<div className="flex flex-col sm:flex-row items-center justify-between">
					<div className="flex gap-2 items-center avatar">
						<div className="w-fit rounded-lg bg-primary border-1 border-accent p-1">
							<SiteLogo className="size-10"/>
						</div>
						<p className="text-neutral w-full text-xs m-0">Damon Sharp - {year}</p>
					</div>
					<div className="flex gap-4 items-center justify-end">
						<SocialIconsList/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
