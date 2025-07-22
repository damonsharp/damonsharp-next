import { gql } from "@apollo/client";

const RecommendationsFragment = gql`
	fragment RecommendationsFragment on Recommendations {
		intro
		recommendation {
			content
			person
			title
		}
	}
`;

export default RecommendationsFragment;
