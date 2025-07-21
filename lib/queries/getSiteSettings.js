import { gql } from "@apollo/client";

const SITE_SETTINGS_QUERY = gql`
	query siteSettings {
		siteSettings {
			openToWork {
				openToWork
			}
		}
	}`;

export default SITE_SETTINGS_QUERY;
