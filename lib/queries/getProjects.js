import { gql } from "@apollo/client";
import PageFragment from "@/lib/queries/fragments/PageFragment";
import ProjectTypesFragment from "@/lib/queries/fragments/ProjectTypesFragment";
import ProjectTechnologiesFragment from "@/lib/queries/fragments/ProjectTechnologiesFragment";

const PROJECTS_QUERY = gql`
	query getProjects {
		projects(where: {status: PUBLISH}) {
			nodes {
				id
				slug
				title
				excerpt
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
		}
		terms {
			nodes {
				id
				taxonomyName
				name
				slug
			}
		}
		projectTypes(where: {hideEmpty: true}) {
			...ProjectTypesFragment
		}
		technologies(where: {hideEmpty: true}) {
			...ProjectTechnologiesFragment
		}
		page(id: "/projects/", idType: URI) {
			...PageFragment
		}
	}
	${PageFragment}
	${ProjectTypesFragment}
	${ProjectTechnologiesFragment}
`;

export default PROJECTS_QUERY;
