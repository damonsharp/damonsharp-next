import SiteLogo from "@/components/SiteLogo";
import { faXTwitter, faGithub, faLinkedin, faMastodon } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "@/components/SocialIcon";

const Footer = () => {
	return (
		<footer className="bg-white text-primary p-12">
			<div className="md:container md:mx-auto">
				<div className="grid grid-flow-col items-center">
					<div className="col-span-4">
						<div className="avatar content-center">
							<div className="w-24 rounded-lg bg-primary border-2 border-accent p-3">
								<SiteLogo classes="w-full h-auto"/>
							</div>
						</div>
						<div className="grid grid-flow-col-dense auto-cols-max mt-6 gap-4">
							<SocialIcon link="https://x.com/damonsharp" icon={faXTwitter} classes="w-6 h-6 text-primary hover:text-accent"/>
							<SocialIcon link="https://github.com/damonsharp" icon={faGithub} classes="w-6 h-6 text-primary hover:text-accent"/>
							<SocialIcon link="https://www.linkedin.com/in/damonsharp" icon={faLinkedin} classes="w-6 h-6 text-primary hover:text-accent"/>
							<SocialIcon link="https://phpc.social/@damonsharp" icon={faMastodon} classes="w-6 h-6 text-primary hover:text-accent"/>
						</div>
					</div>
					<div className="col-span-2">
						<h3 className="text-lg font-bold">Heading</h3>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
					</div>
					<div className="col-span-2">
						<h3 className="text-lg font-bold">Heading</h3>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
					</div>
					<div className="col-span-2">
						<h3 className="text-lg font-bold">Heading</h3>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
						<ul>
							<li><a href="">Link</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
