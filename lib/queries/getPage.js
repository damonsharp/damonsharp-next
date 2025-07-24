import { gql } from "@apollo/client";
import RecommendationsFragment from "@/lib/queries/fragments/RecommendationsFragment";
import { query } from "@/lib/apolloClient";

const PAGE_QUERY = gql`
	query getPage($id: ID!, $recommendations: Boolean = false) {
		page(id: $id, idType: URI) {
			title
			content
			id
			recommendations @include(if: $recommendations) {
				...RecommendationsFragment
			}
		}
	}
	${RecommendationsFragment}
`;

export default async function getPage (slug, recommendations) {
	const { data } = await query({
		query: PAGE_QUERY,
		variables: {
			id: slug,
			recommendations
		}
	});

	return data;
};
