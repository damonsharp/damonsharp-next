import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import SITE_SETTINGS_QUERY from "@/lib/queries/getSiteSettings";

const OpenToWork = () => {
	const {
		data,
		loading,
		error
	} = useQuery(SITE_SETTINGS_QUERY);
	const openToWork = data?.siteSettings?.openToWork?.openToWork;

	return (
		<section
			className="bg-neutral py-18 bg-linear-[3deg,var(--color-primary)_70%,var(--color-accent)_calc(70%+2px)]">
			<div className="inner pt-16 flex flex-col text-neutral">
				<h2 className="text-neutral">Need help with a project?</h2>
				{openToWork ? (
					<p>I'm currently open for work and would love to discuss how I can assist with your project. Let's get started.</p>
				) : (
					<p>My availability is very limited at the moment, but I would love to discuss how I can assist and help bring your project to life if our schedules align.</p>
				)}
				<Button
					asChild
					className="bg-accent text-primary hover:bg-neutral px-5 py-4 rounded-sm w-fit justify-self-end"
				>
					<Link href={`/contact`}>
						Start the Conversation
					</Link>
				</Button>
			</div>
		</section>
	);
};

export default OpenToWork;
