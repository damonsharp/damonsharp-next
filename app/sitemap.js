import { query } from "@/lib/apolloClient";
import PROJECTS_QUERY from "@/lib/queries/getProjects";

export default async function sitemap () {
	const { data } = await query({
		query: PROJECTS_QUERY
	});
	const items = [
		{
			url: "https://www.damonsharp.me",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://www.damonsharp.me/projects",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://www.damonsharp.me/resume",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://www.damonsharp.me/contact",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.1,
		},
	];

	data.projects.nodes.map(project => {
		const projectUrl = `https://www.damonsharp.me/projects/${project.uri.replace("/project/", "")}`;
		items.push({
			url: projectUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		});
	});

	return items;
}
