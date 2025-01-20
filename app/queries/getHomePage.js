import { gql } from "@apollo/client";

const HOME_PAGE_QUERY = gql`
	query HomePage {
		page(id: "home", idType: URI) {
			title
			content
			id
		}
	}`;

export default HOME_PAGE_QUERY;
