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
		<div className="flex gap-3 col-span-1 items-center">
			<SocialIcon link="https://www.linkedin.com/in/damonsharp" icon={faLinkedin}
			            className="size-6 text-2xl text-neutral hover:text-accent" label="LinkedIn icon"/>
			<SocialIcon link="https://github.com/damonsharp" icon={faGithub}
			            className="size-6 text-2xl text-neutral hover:text-accent" label="GitHub icon"/>
			<SocialIcon link="https://phpc.social/@damonsharp" icon={faMastodon}
			            className="size-6 text-2xl text-neutral hover:text-accent" label="Mastodon icon"/>
			<SocialIcon link="/contact" icon={faSquareEnvelope}
			            className="size-6 text-2xl text-neutral hover:text-accent" label="Email icon"/>
			<SocialIcon link="https://x.com/damonsharp" icon={faXTwitter}
			            className="size-6 text-2xl text-neutral hover:text-accent" label="Twitter (X) icon"/>
		</div>
	);
};

export default SocialIconsList;
