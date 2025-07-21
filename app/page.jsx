"use client";

import { useQuery } from "@apollo/client";
import PAGE_QUERY from "@/lib/queries/getPage";
import PROJECTS_QUERY from "@/lib/queries/getProjects";
import SITE_SETTINGS_QUERY from "@/lib/queries/getSiteSettings";
import EditorContent from "@/components/EditorContent";
import ProjectBanner from "@/components/ProjectBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactToAdmin from "@/emails/ContactToAdmin";

export default function Home () {
	const { data: settingsData } = useQuery(SITE_SETTINGS_QUERY);
	const openToWork             = settingsData?.siteSettings?.openToWork?.openToWork;
	const {
			  loading,
			  error,
			  data
		  }                      = useQuery(
		PAGE_QUERY,
		{
			variables: { "id": "home" }
		}
	);

	const { data: projectsData } = useQuery(PROJECTS_QUERY);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const {
			  title,
			  content
		  } = data?.page;

	return (
		<>
			<section
				className="text-primary pt-10 pb-32 bg-linear-[180deg,var(--color-neutral)_70%,var(--color-accent)_calc(70%+2px)]">
				<EditorContent title={title} html={content} className="inner"/>
			</section>
			{projectsData && (
				<section className="bg-accent">
					<div className="inner-wide px-6 flex flex-col">
						<h2 className="text-neutral">Latest Project</h2>
						<ProjectBanner project={projectsData?.projects?.nodes.slice(0, 1)[ 0 ]}/>
					</div>
				</section>
			)}
			<section
				className="bg-neutral py-24 bg-linear-[3deg,var(--color-primary)_70%,var(--color-accent)_calc(70%+2px)]">
				<div className="inner pt-12 flex flex-col text-neutral">
					<h2 className="text-neutral">Need help with a project?</h2>
					{openToWork ? (
						<p>I'm currently open for work and would love to discuss how I can assist with your project. Let's start the conversation.</p>
					) : (
						<p>My availability is very limited at the moment, but I would love to discuss how I can assist and help bring your project to life if our schedules align.</p>
					)}
					<Button
						asChild
						className="bg-accent text-primary hover:bg-neutral px-4 py-2 rounded-sm w-fit justify-self-end"
					>
						<Link href={`/contact`}>
							Start the Conversation
						</Link>
					</Button>
				</div>
			</section>
		</>
	);
}

