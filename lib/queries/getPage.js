import { gql } from "@apollo/client";
import RecommendationsFragment from "@/lib/queries/fragments/RecommendationsFragment";
import { query } from "@/lib/apolloClient";
import ResumeMetaFragment from "@/lib/queries/fragments/ResumeMetaFragment";

const PAGE_QUERY = gql`
	query getPage($id: ID!, $recommendations: Boolean = false, $resumeMeta: Boolean = false) {
		page(id: $id, idType: URI) {
			title
			content
			id
			recommendations @include(if: $recommendations) {
				...RecommendationsFragment
			}
			resumeMeta @include(if: $resumeMeta) {
				...ResumeMetaFragment
			}
		}
	}
	${RecommendationsFragment}
	${ResumeMetaFragment}
`;

export default async function getPage (slug, recommendations, resumeMeta) {
	const { data } = await query({
		query: PAGE_QUERY,
		variables: {
			id: slug,
			recommendations,
			resumeMeta
		}
	});

	return data;
};
