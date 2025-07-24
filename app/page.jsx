import { query } from "@/lib/apolloClient";
import PAGE_QUERY from "@/lib/queries/getPage";
import PROJECTS_QUERY from "@/lib/queries/getProjects";
import ProjectBanner from "@/components/ProjectBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SocialIconsList from "@/components/SocialIconsList";
import OpenToWork from "@/components/OpenToWork";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import Recommendations from "@/components/Recommendations";
import ContainerNarrow from "@/components/ContainerNarrow";
import ContainerWide from "@/components/ContainerWide";
import EditorContent from "@/components/EditorContent";
import getPage from "@/lib/queries/getPage";

export async function generateMetadata () {
	return {
		title: "Home"
	};
}

export default async function Home () {

	const { data: projectsData } = await query({ query: PROJECTS_QUERY });

	const { page } = await getPage("home", true);

	const {
		title,
		content,
		recommendations,
	} = page;

	return (
		<>
			<section
				className="text-primary pt-10 pb-36 bg-linear-[180deg,var(--color-neutral)_90%,var(--color-accent)_calc(70%+2px)] -mt-8">
				<ContainerNarrow className="pb-10">
					<h1 className="">{title}</h1>
					<EditorContent>{content}</EditorContent>
				</ContainerNarrow>
				<ContainerNarrow>
					<p>Want to learn more about my profession qualifications?</p>
					<div className="flex gap-12 align-center">
						<Button
							asChild
							className="bg-primary hover:bg-accent text-neutral hover:text-primary px-5 py-4 rounded-sm w-fit justify-self-end"
						>
							<Link href={`/resume`}>
								<FontAwesomeIcon icon={faFileText}/> View Resume/CV
							</Link>
						</Button>
						<SocialIconsList/>
					</div>
				</ContainerNarrow>
			</section>
			{projectsData && (
				<section className="bg-accent pb-12">
					<ContainerWide>
						<h2 className="text-neutral text-shadow-md">Latest Project</h2>
						<ProjectBanner project={projectsData?.projects?.nodes.slice(0, 1)[ 0 ]}/>
					</ContainerWide>
				</section>
			)}
			<OpenToWork/>
			<Recommendations recommendations={recommendations}/>
		</>
	);
}

