import SiteLogo from "@/components/SiteLogo";
import {
	faGithub,
	faLinkedin,
	faMastodon,
	faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "@/components/SocialIcon";
import { cn } from "@/lib/utils";

const Footer = ({ className }) => {
	const year = ( new Date() ).getFullYear();

	return (
		<footer
			className={cn("text-neutral bg-secondary p-4 -mt-6 items-end border-t border-accent", className)}>
			<div className="md:container md:mx-auto">
				<div className="grid grid-cols-5 items-center justify-between">
					<div className="flex items-center col-span-4 avatar">
						<div className="w-fit rounded-lg bg-primary border-1 border-accent p-1">
							<SiteLogo className="size-10"/>
						</div>
						<p className="text-accent w-full text-xs m-0">Damon Sharp - {year}</p>
					</div>
					<div className="flex gap-4 col-span-1 items-center justify-end">
						<SocialIcon link="https://x.com/damonsharp" icon={faXTwitter}
									classes="size-6 text-accent hover:text-neutral"/>
						<SocialIcon link="https://github.com/damonsharp" icon={faGithub}
									classes="size-6 text-accent hover:text-neutral"/>
						<SocialIcon link="https://www.linkedin.com/in/damonsharp" icon={faLinkedin}
									classes="size-6 text-accent hover:text-neutral"/>
						<SocialIcon link="https://phpc.social/@damonsharp" icon={faMastodon}
									classes="size-6 text-accent hover:text-neutral"/>
						<SocialIcon link="/contact" icon={faSquareEnvelope}
									classes="size-6 text-accent hover:text-neutral"/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
