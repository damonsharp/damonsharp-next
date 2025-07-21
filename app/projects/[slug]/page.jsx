"use client";

import { useQuery } from "@apollo/client";
import PROJECT_QUERY from "@/lib/queries/getProject";
import { escHtml } from "@/lib/utils";
import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Spinner from "@/components/Spinner";


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
		return <Spinner/>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const { project } = data;

	if ( ! project ) {
		notFound();
	}

	const { id, title, content, projectMetadata } = project;
	const { images, contribution, techStack, liveUrl } = projectMetadata;

	return (
		<article className={`sm:grid grid-cols-3 project-${id}`}>
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
				<h1>{title}</h1>
				{content && (
					<div>
						<h2>Description:</h2>
						{escHtml(content)}
					</div>
				)}
				{contribution && (
					<div>
						<h2>Contribution:</h2>
						<p>{escHtml(contribution)}</p>
					</div>
				)}
				{techStack && (
					<div>
						<h2>Tech stack:</h2>
						<p>{techStack}</p>
					</div>
				)}
				{liveUrl && (
					<Link className="bg-primary px-5 py-3 text-neutral rounded mt-5" href={liveUrl}>Visit Live Site</Link>
				)}
			</section>
		</article>
	);
}
