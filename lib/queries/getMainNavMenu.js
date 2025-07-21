import { gql } from "@apollo/client";

const MAIN_NAV_QUERY = gql`
	query getMainNavMenu {
		menu(id: "Site Navigation", idType: NAME) {
			menuItems {
				nodes {
					id
					url
					label
					parentId
				}
			}
		}
	}`;

export default MAIN_NAV_QUERY;
