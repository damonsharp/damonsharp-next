import { gql } from "@apollo/client";
import RecommendationsFragment from "@/lib/queries/fragments/RecommendationsFragment";

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

export default PAGE_QUERY;
