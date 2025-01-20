import { gql } from "@apollo/client";

const ProjectTechnologiesFragment = gql`
	fragment ProjectTechnologiesFragment on RootQueryToTechnologyConnection {
		nodes {
			count
			id
			name
			slug
		}
	}`;

export default ProjectTechnologiesFragment;
