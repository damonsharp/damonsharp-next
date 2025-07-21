import { gql } from "@apollo/client";

const PAGE_QUERY = gql`
	query getPage($id: ID!) {
		page(id: $id, idType: URI) {
			title
			content
			id
		}
	}`;

export default PAGE_QUERY;
