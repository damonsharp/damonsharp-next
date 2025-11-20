"use client";

import React, {
	useEffect,
	useState
} from "react";
import Image from "next/image";

const GalleryImages = ({
	project,
	images
}) => {
	const projectImage = project.projectMetadata.images[ 0 ].image.node.sourceUrl;
	const projectImageAlt = project.projectMetadata.images[ 0 ].image.node.altText;

	const [galleryImageData, setGalleryImageData] = useState({
		src: projectImage,
		alt: projectImageAlt,
		thumbnailIndex: 0
	});

	useEffect(() => {
		if (project) {
			setGalleryImageData({
				...galleryImageData,
				src: projectImage,
				alt: projectImageAlt
			});
		}
	}, [project]);

	return (
		<>
			<Image
				src={galleryImageData.src}
				alt={galleryImageData.alt}
				className="w-full h-auto w-max rounded overflow-clip shadow-sm"
				width={600}
				height={338}
				style={{
					width: "100%",
					height: "auto"
				}}
			/>
			{images.length > 1 && (
				<ul className="mt-4 grid grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
					{images.map((image, i) => {
						const srcUrl = image.image?.node?.sourceUrl;

						return (
							<li key={i}
							    className={`border-3 ${galleryImageData.thumbnailIndex === i ? "border-accent" : "border-neutral"} rounded cursor-pointer overflow-clip transition hover:border-accent`}>
								<img
									src={srcUrl}
									alt={image.image?.node?.altText}
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
		</>
	);
};

export default GalleryImages;
