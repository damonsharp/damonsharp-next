"use client";

import { useQuery } from "@apollo/client";
import PROJECT_QUERY from "@/lib/queries/getProject";
import { escHtml } from "@/lib/utils";
import {
	use,
	useEffect,
	useState
} from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Spinner from "@/components/Spinner";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerNarrow from "@/components/ContainerNarrow";

export default function Project ({ params }) {
	const [galleryImageData, setGalleryImageData] = useState({
		src: null,
		alt: "",
		thumbnailIndex: 0
	});
	params = use(params);
	const { slug } = params;
	const {
		loading,
		error,
		data
	} = useQuery(
		PROJECT_QUERY,
		{
			variables: {
				slug: slug
			}
		}
	);

	useEffect(() => {
		if (data) {
			setGalleryImageData({
				...galleryImageData,
				src: data.project.projectMetadata.images[ 0 ].image.node.sourceUrl,
				alt: data.project.projectMetadata.images[ 0 ].image.node.altText
			});
		}
	}, [data]);

	if (loading) {
		return <Spinner/>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const { project } = data;

	if (! project) {
		notFound();
	}

	const {
		id,
		title,
		content,
		projectMetadata
	} = project;
	const {
		images,
		contribution,
		techStack,
		liveUrl
	} = projectMetadata;

	return (
		<article className={`project-${id} py-12`}>
			<ContainerNarrow>
				<section className="flex flex-col">
					<h1>{title}</h1>
					{content && (
						<div>
							{escHtml(content)}
						</div>
					)}
					{galleryImageData.src && (
						<Image
							src={galleryImageData.src}
							alt={galleryImageData.alt}
							className="w-full h-auto w-max rounded overflow-clip shadow-sm"
							width={600}
							height={338}
							style={{
								width: "100%",
								height: "auto",
							}}
							priority={true}
						/>
					)}
					{images.length > 1 && (
						<ul className="mt-6 flex gap-2 lg:gap-6 justify-center items-center">
							{images.map((image, i) => {
								const srcUrl = image.image?.node?.sourceUrl;

								return (
									<li key={image.image.node.id}
									    className={`w-16 md:w-24 lg:w-40 border-2 ${galleryImageData.thumbnailIndex === i ? "border-secondary" : "border-neutral"} rounded cursor-pointer overflow-clip transition hover:border-secondary`}>
										<img
											className="size-max"
											src={srcUrl}
											alt={image.image?.node?.altText}
											priority={true}
											onClick={(event) => {
												setGalleryImageData({
													...galleryImageData,
													src: event.target.getAttribute("src"),
													alt: event.target.alt,
													thumbnailIndex: i
												});
											}}
										/>
									</li>
								);
							})}
						</ul>
					)}
				</section>
				<section className="flex flex-col">
					{contribution && (
						<div>
							<h2 className="text-lg">Contribution:</h2>
							<p>{escHtml(contribution)}</p>
						</div>
					)}
					{techStack && (
						<div>
							<h2 className="text-lg">Tech stack:</h2>
							<p>{techStack}</p>
						</div>
					)}
					{liveUrl && (
						<Button asChild
						        className="max-w-max bg-primary text-neutral hover:bg-accent hover:text-primary px-5 py-4 rounded mt-5 cursor-pointer">
							<a href={liveUrl} target="_blank" rel="noopener">
								Visit Live Site <FontAwesomeIcon icon={faExternalLink}/>
							</a>

						</Button>
					)}
				</section>
			</ContainerNarrow>
		</article>
	);
}
