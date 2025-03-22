"use client";

import { useQuery } from "@apollo/client";
import PROJECT_QUERY from "@/app/queries/getProject";
import { escHtml } from "@/app/utils";
import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation'
import Link from 'next/link'


export default function Project({ params }) {
	params = use(params);
	const {slug} = params;
	const { loading, error, data } = useQuery(
		PROJECT_QUERY,
		{
			variables: {
				slug: slug
			}
		}
	);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const { project } = data;

	if ( ! project ) {
		notFound();
	}

	const { id, title, content, projectMetadata } = project;
	const { images, contribution, liveUrl } = projectMetadata;

	return (
		<article className={`sm:grid grid-cols-3 gap-8 project-${id}`}>
			<section className="col-span-1">
				<Image
					src={images[ 0 ]?.image?.node?.sourceUrl}
					alt={images[ 0 ]?.image?.node?.altText}
					className="w-full h-auto w-max"
					width={600}
					height={338}
					style={{
						width: "100%",
						height: "auto",
					}}
					priority={true}
				/>
			</section>
			<section className="col-span-2">
				<h1 className="text-4xl mb-4">{title}</h1>
				{content && (
					<div>
						{escHtml(content)}
					</div>
				)}
				{contribution && (
					<p className="mt-4">{escHtml(contribution)}</p>
				)}
				{liveUrl && (
					<Link className="inline-block mt-4 px-4 py-2 border-2 border-primary hover:border-accent hover:text-accent rounded" href={liveUrl}>Visit Live Site</Link>
				)}
			</section>
		</article>
	);
}
