import { gql } from "@apollo/client";

const PROJECT_TERMS_QUERY = gql`
	query ProjectTypes {
		projectTypes(where: {hideEmpty: true}) {
			...ProjectTypesFragment
		}
		technologies {
			...ProjectTechnologiesFragment
		}
	}`;

export default PROJECT_TERMS_QUERY;
