import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SITE_SETTINGS_QUERY from "@/lib/queries/getSiteSettings";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerNarrow from "@/components/ContainerNarrow";
import { query } from "@/lib/apolloClient";

export default async function OpenToWork () {
	const { data } = await query({
		query: SITE_SETTINGS_QUERY,
	});

	const openToWork = data?.siteSettings?.openToWork?.openToWork;
	const textAvailable = data?.siteSettings?.openToWork?.textAvailable;
	const textNotAvailable = data?.siteSettings?.openToWork?.textNotAvailable;

	return (
		<section
			className="bg-neutral py-18 bg-linear-[3deg,var(--color-primary)_70%,var(--color-accent)_calc(70%+2px)]">
			<ContainerNarrow className="pt-16 text-neutral">
				<h2 className="text-neutral">Need help with a project?</h2>
				{openToWork ? (
					<p>{textAvailable}</p>
				) : (
					<p>{textNotAvailable}</p>
				)}
				<Button
					asChild
					className="bg-accent text-primary hover:bg-neutral px-5 py-4 rounded-sm w-fit justify-self-end"
				>
					<Link href={`/contact`}>
						<FontAwesomeIcon icon={faComments}/> Start the Conversation
					</Link>
				</Button>
			</ContainerNarrow>
		</section>
	);
}
