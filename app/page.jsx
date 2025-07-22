"use client";

import { useQuery } from "@apollo/client";
import PAGE_QUERY from "@/lib/queries/getPage";
import PROJECTS_QUERY from "@/lib/queries/getProjects";
import SITE_SETTINGS_QUERY from "@/lib/queries/getSiteSettings";
import EditorContent from "@/components/EditorContent";
import ProjectBanner from "@/components/ProjectBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import React from "react";
import SocialIconsList from "@/components/SocialIconsList";
import OpenToWork from "@/components/OpenToWork";

export default function Home () {
	const {
		loading,
		error,
		data
	} = useQuery(
		PAGE_QUERY,
		{
			variables: { "id": "home" }
		}
	);

	const { data: projectsData } = useQuery(PROJECTS_QUERY);

	if (loading) {
		return <Spinner/>;
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
				className="text-primary pt-10 pb-32 bg-linear-[180deg,var(--color-neutral)_85%,var(--color-accent)_calc(70%+2px)] -mt-6">
				<EditorContent title={title} html={content} className="inner pb-10"/>
				<div className="inner flex flex-col">
					<p>Want to learn more about my profession qualifications?</p>
					<div className="flex align-center">
						<Button
							asChild
							className="bg-primary hover:bg-accent text-neutral hover:text-primary px-5 py-4 rounded-sm w-fit justify-self-end"
						>
							<Link href={`/resume`}>
								View Resume/CV
							</Link>
						</Button>
						<SocialIconsList/>

					</div>
				</div>
			</section>
			{projectsData && (
				<section className="bg-accent pb-12">
					<div className="inner-wide px-6 flex flex-col">
						<h2 className="text-neutral text-shadow-md">Latest Project</h2>
						<ProjectBanner project={projectsData?.projects?.nodes.slice(0, 1)[ 0 ]}/>
					</div>
				</section>
			)}
			<OpenToWork/>
		</>
	);
}

