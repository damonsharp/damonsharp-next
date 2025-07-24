export default function sitemap () {
	return [
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
}
