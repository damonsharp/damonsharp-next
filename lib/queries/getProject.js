import { gql } from "@apollo/client";

const PROJECT_QUERY = gql`
	query getProject($slug: ID!) {
		project(id: $slug, idType: SLUG) {
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

export default PROJECT_QUERY;
