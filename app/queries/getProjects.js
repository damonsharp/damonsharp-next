import { gql } from '@apollo/client';
import PageFragment from '@/app/queries/fragments/PageFragment';
import ProjectTypesFragment from '@/app/queries/fragments/ProjectTypesFragment';
import ProjectTechnologiesFragment from '@/app/queries/fragments/ProjectTechnologiesFragment';

const PROJECTS_QUERY = gql`
	query ProjectsQuery {
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
