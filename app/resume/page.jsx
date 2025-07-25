import React from "react";
import Link from "next/link";
import PAGE_QUERY from "@/lib/queries/getPage";
import ContainerNarrow from "@/components/ContainerNarrow";
import ContainerWide from "@/components/ContainerWide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleRight,
	faArrowAltCircleDown,
	faChevronCircleRight,
	faCode,
	faGaugeHigh,
	faGraduationCap,
	faPeopleGroup,
	faTachographDigital,
	faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { Hr } from "@react-email/components";
import { Button } from "@/components/ui/button";
import { query } from "@/lib/apolloClient";
import EditorContent from "@/components/EditorContent";
import getPage from "@/lib/queries/getPage";

export async function generateMetadata () {
	return {
		title: "Resume/CV"
	};
}

export default async function ResumePage ({ params }) {
	const { page } = await getPage("resume");
	const {
		title,
		content
	} = page;

	return (
		<>
			<section className="bg-secondary text-neutral -mt-6 py-10">
				<ContainerNarrow className="flex flex-col gap-8 sm:gap-2">
					<div className="flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center justify-between">
						<h1 className="text-neutral w-full">{title}</h1>
						<Button
							asChild
							className="bg-accent text-primary hover:bg-neutral hover:text-primary px-5 py-4 rounded-sm w-fit"
						>
							<Link href={`/DamonSharpResume.pdf`} download={true} className="flex items-center">
								<span>Download PDF</span>
								<FontAwesomeIcon icon={faArrowAltCircleDown}/>
							</Link>
						</Button>
					</div>
					<h2 className="text-neutral text-lg">Overview</h2>
					<EditorContent>{content}</EditorContent>
				</ContainerNarrow>
			</section>
			<section
				className="pt-12 pb-32 bg-linear-[177deg,var(--color-neutral)_95%,var(--color-primary)_calc(70%+2px)] md:bg-linear-[177deg,var(--color-neutral)_88%,var(--color-primary)_calc(70%+2px)]">
				<ContainerWide>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
						<div className="flex flex-col">
							<h2 className="flex gap-4 items-center">
								<FontAwesomeIcon icon={faGaugeHigh} className="flex-shrink-0 size-12"/>
								<span>Career Highlights</span>
							</h2>
							<Hr/>
							<ul className="flex flex-col">
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>Multiple years of full stack development experience within consulting, agency, and product engineering roles.</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>Created internal tools/plugins to help facilitate efficiency and consistency.</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>Development lead & technical client contact for multiple concurrent projects.</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>Multiple years of experience working within remotely distributed teams.</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>WordPress Engineer since v2.3.</span>
								</li>
							</ul>
						</div>
						<div className="flex flex-col">
							<h2 className="flex gap-3 items-center">
								<FontAwesomeIcon icon={faCode} className="flex-shrink-0 size-12"/>
								<span>Technical Skills/Stacks</span>
							</h2>
							<Hr/>
							<ul className="flex flex-col gap-2">
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>WordPress/Headless WordPress/VIP</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>JavaScript, React/Next.js, jQuery</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>PHP, Laravel, Composer</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>MySQL & GraphQL</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>PHPUnit, Xdebug</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>Command line, WP-CLI, Artisan</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>HTML, CSS, Custom Properties, LESS, Sass, Tailwind CSS</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>npm, webpack, Vite</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>Git (GitHub/GitLab/Bitbucket), SVN</span>
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon icon={faChevronCircleRight} className="flex-shrink-0 size-5"/>
									<span>CircleCI, GitHub Actions</span>
								</li>
							</ul>
						</div>
					</div>
				</ContainerWide>
			</section>
			<section className="bg-primary text-neutral pt-8 pb-18 xl:pt-18">
				<ContainerNarrow>
					<h2 className="flex items-center gap-4 text-neutral pb-8">
						<FontAwesomeIcon icon={faUserTie} className="flex-shrink-0 size-10"/>
						<span>Professional Experience</span>
					</h2>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">230 Studios, LLC (Freelance Consultancy)</h3>
						<p className="text-neutral text-md italic">December 2024 &ndash; present</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Provide web development services and consulting to small businesses, with a focus on custom WordPress websites, plugins, block based themes and PHP/Laravel application development.</li>
							<li>Support and development of custom Next JS applications utilizing WordPress as a data layer.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">Senior Developer II - Build, Kanopi Studios</h3>
						<p className="text-neutral text-md italic">October 2022 &ndash; March 2024</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Developed new WordPress websites, internal tools, and plugins with focus on custom integrations across plugins and platforms/APIs.</li>
							<li>Converted ACF blocks to native React blocks for an internal block theme.</li>
							<li>Provided mentoring to junior developers, code reviews, and feedback.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">Senior Full Stack Developer, Universal Yums</h3>
						<p className="text-neutral text-md italic">March 2022 &ndash; Oct. 2022</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Developed PHP, WordPress, WooCommerce and Laravel solutions to support universalyums.com Woo/eCommerce initiatives.</li>
							<li>Architected custom WP-CLI scripts to modify orders, process refunds, and enhance other WooCommerce order data.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">WordPress Technical Lead, Kanopi Studios</h3>
						<p className="text-neutral text-md italic">November 2018 &ndash; March 2022</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Provided technical leadership, support and custom development for a variety of internal and client projects, ensuring deliverables were on time and on budget.</li>
							<li>Collaborated with cross-functional teams (design, marketing, content, etc.) to align technical capabilities with business objectives.</li>
							<li>Implemented best practices for code quality and version control through code reviews, training and mentoring, fostering a culture of continuous improvement.</li>
							<li>Interfaced with clients to determined project scope, provided user stories and project estimates, assisted sales with technical questions.</li>
							<li>Led the migration of legacy sites to WordPress, ensuring minimal downtime and data integrity while modernizing user interfaces and improving functionality.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">Senior WordPress Developer, Codivated</h3>
						<p className="text-neutral text-md italic">August 2017 &ndash; February 2019</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Architected and developed integrations for a variety of client projects and WordPress products, including WPtouch Pro, Simple Calendar, Frenzy, and Storemapper.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">Senior Digital Engineer, InVentiv Creative Studios</h3>
						<p className="text-neutral text-md italic">April 2010 &ndash; June 2015</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Architected and developed custom websites and PHP applications using Laravel and WordPress to support client digital marketing and branding efforts within the pharmaceutical industry.</li>
							<li>Interfaced with a variety of disciplines to bring projects through to deployment, including client services, design, video production, quality control, and project management.</li>
							<li>Mentored and trained junior level developers on new technologies and their proper implementation and integration into existing projects.</li>
							<li>Supported the web development efforts of iQ, an Innovation Lab within inVentiv Health, including marketing support and development of iQ's product portfolio: iQ.mercury, iQ.fluent, iQ.align, and iQ.rival. I was also part of the iQ team that developed the Self Detail portion of iQ.mercury 3, a self eDetailing application that allows healthcare professionals to provide patients a customized presentation about their disease state.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">WordPress Developer, MaxFoundry</h3>
						<p className="text-neutral text-md italic">January 2014 &ndash; June 2014</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>WordPress plugin feature development and support for the MaxGalleria Gallery Platform and its add-ons, including MaxGalleria Facebook.</li>
						</ul>
					</div>
					<hr className="border border-secondary "/>
					<div className="flex flex-col gap-2">
						<h3 className="text-neutral">Sharp Web Solutions (Freelance Consultancy)</h3>
						<p className="text-neutral text-md italic">August 2009 &ndash; December 2018</p>
						<ul className="flex flex-col gap-2 list-disc pl-5">
							<li>Provide web development services and consulting to small businesses, with a focus on custom WordPress websites, plugins and PHP/Laravel application development.</li>
						</ul>
					</div>
				</ContainerNarrow>
			</section>
			<section className="bg-accent text-primary pt-12 pb-6">
				<ContainerNarrow>
					<h2 className="flex items-center gap-4">
						<FontAwesomeIcon icon={faTachographDigital} className="flex-shrink-0 size-12"/>
						<span>Projects</span>
					</h2>
					<p>Throughout my development career I have had the privilege of working on a variety of different projects, including full website builds, plugin/product development and integrations, theme development, data processing scripts, and site migrations.</p>
					<Button
						asChild
						className="bg-primary text-neutral hover:bg-accent hover:text-primary px-5 py-4 rounded-sm w-fit"
					>
						<Link href={`/projects`} className="flex items-center">
							<span>View Projects</span>
							<FontAwesomeIcon icon={faArrowAltCircleRight}/>
						</Link>
					</Button>
				</ContainerNarrow>
			</section>
			<section
				className="text-primary pt-28 sm:pt-24 pb-12 bg-linear-[2deg,var(--color-neutral)_90%,var(--color-accent)_calc(90%+2px)] sm:bg-linear-[2deg,var(--color-neutral)_83%,var(--color-accent)_calc(83%+2px)]">
				<ContainerWide>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
						<div className="flex flex-col">
							<h2 className="flex items-center gap-4">
								<FontAwesomeIcon icon={faPeopleGroup} className="flex-shrink-0 size-12"/>
								<span>Community Involvement</span>
							</h2>
							<ul className="flex flex-col gap-2">
								<li className="flex items-center gap-2">
									<FontAwesomeIcon icon={faChevronCircleRight} className="size-5"/>
									<span>Member of the Columbus &amp; Dayton, OH WordPress meetups</span>
								</li>
								<li className="flex items-center gap-2">
									<FontAwesomeIcon icon={faChevronCircleRight} className="size-5"/>
									<span>WordCamp Columbus Volunteer</span>
								</li>
								<li className="flex items-center gap-2">
									<FontAwesomeIcon icon={faChevronCircleRight} className="size-5"/>
									<span>Organized my own WordPress meetup in Marysville</span>
								</li>
							</ul>
						</div>
						<div className="flex flex-col">
							<h2 className="flex items-center gap-4">
								<FontAwesomeIcon icon={faGraduationCap} className="flex-shrink-0 size-12"/>
								<span>Education</span>
							</h2>
							<p>I hold a B.A. in chemistry from the Ohio State University and completed two years of study at Franklin University in web development, but am mostly self-taught. I continue to keep abreast of new tech stacks, tools, and development tips via Udemy, Laracasts, and other online learning resources.</p>
						</div>
					</div>
				</ContainerWide>
			</section>
		</>
	);
}
