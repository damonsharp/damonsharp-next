import Image from "next/image";
import {
	cn,
	escHtml
} from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Project = ({
	project,
	className = ""
}) => {
	const {
			  excerpt,
			  title,
			  slug,
			  projectMetadata
		  } = project;
	return (
		<article className={cn("grid grid-cols-1 md:grid-cols-2", className)}>
			<figure className="">
				<Image
					src={projectMetadata?.images[ 0 ]?.image?.node?.sourceUrl}
					alt={projectMetadata?.images[ 0 ]?.image?.node?.altText}
					className="w-full"
					width={600}
					height={338}
					priority={true}
				/>
			</figure>
			<div className="h-full">
				<div className="flex flex-col justify-staart h-full">
					<h3>{title}</h3>
					{excerpt && (
						<div key={slug}>{escHtml(excerpt)}</div>
					)}
					<div className="flex items-center">
						<Button asChild
								className="bg-primary text-neutral hover:bg-secondary hover:text-neutral px-4 py-2 rounded-sm w-fit justify-self-end">
							<Link href={`/projects/${slug}`}>
								View Project Details
							</Link>
						</Button>
						<Button asChild
								className="bg-neutral text-primary hover:bg-secondary hover:text-neutral px-4 py-2 rounded-sm w-fit justify-self-end">
							<Link href={`/projects`}>
								View All Projects
							</Link>
						</Button>

					</div>
				</div>
			</div>
		</article>
	);
};

export default Project;
