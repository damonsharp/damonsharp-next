import React from "react";
import SocialIcon from "@/components/SocialIcon";
import {
	faGithub,
	faLinkedin,
	faMastodon,
	faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialIconsList = () => {
	return (
		<div className="flex gap-4 col-span-1 items-center">
			<SocialIcon link="https://www.linkedin.com/in/damonsharp" icon={faLinkedin}
			            className="size-6 text-2xl text-accent hover:text-primary"/>
			<SocialIcon link="https://github.com/damonsharp" icon={faGithub}
			            className="size-6 text-2xl text-accent hover:text-primary"/>
			<SocialIcon link="https://phpc.social/@damonsharp" icon={faMastodon}
			            className="size-6 text-2xl text-accent hover:text-primary"/>
			<SocialIcon link="/contact" icon={faSquareEnvelope}
			            className="size-6 text-2xl text-accent hover:text-primary"/>
			<SocialIcon link="https://x.com/damonsharp" icon={faXTwitter}
			            className="size-6 text-2xl text-accent hover:text-primary"/>
		</div>
	);
};

export default SocialIconsList;
