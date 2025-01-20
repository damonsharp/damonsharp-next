import Image from "next/image";
import { escHtml } from "@/app/utils";
import Link from "next/link";

const Project = ({ project }) => {
	const { excerpt, title, slug, projectMetadata } = project;
	return (
		<article className="bg-gray-50 grid gap-6 justify-around shadow-lg rounded-lg overflow-clip mb-6 sm:mb-0">
			<figure className="max-h-56 overflow-clip">
				<Image
					src={projectMetadata?.images[ 0 ]?.image?.node?.sourceUrl}
					alt={projectMetadata?.images[ 0 ]?.image?.node?.altText}
					className="w-full h-auto w-max"
					width={600}
					height={338}
					style={{
						width: "100%",
						height: "auto",
					}}
					priority={true}
				/>
			</figure>
			<div className="px-6 grid gap-6 justify-between">
				<div className="grid justify-around gap-6">
					<h2 className="">{title}</h2>
					{excerpt && (
						<div key={slug}>{escHtml(excerpt)}</div>
					)}
				</div>
				<div className="pb-6">
					<Link className="bg-secondary hover:bg-accent text-white px-4 py-2 rounded"
						href={`/projects/${slug}`}>
						View Project Details
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Project;
