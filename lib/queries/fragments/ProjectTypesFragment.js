import { gql } from "@apollo/client";

const ProjectTypesFragment = gql`
	fragment ProjectTypesFragment on RootQueryToProjectTypeConnection {
		nodes {
			count
			id
			name
			slug
		}
	}`;

export default ProjectTypesFragment;
