import { gql } from "@apollo/client";
import { query } from "@/lib/apolloClient";

const PROJECT_QUERY = gql`
	query getProject($id: ID!) {
		project(id: $id, idType: SLUG) {
			title
			content
			id
			slug
			projectMetadata {
				contribution
				images {
					image {
						node {
							altText
							caption
							id
							title
							sourceUrl
						}
					}
				}
				techStack
				liveUrl
			}
		}
		terms {
			nodes {
				id
				taxonomyName
				name
				slug
			}
		}
	}
`;

export default async function getProject (slug) {
	const { data } = await query({
		query: PROJECT_QUERY,
		variables: {
			id: slug
		}
	});

	return data;
};
