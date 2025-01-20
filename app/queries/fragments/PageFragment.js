import { gql } from "@apollo/client";

const PageFragment = gql`
	fragment PageFragment on Page {
		id
		title
		content
		seo {
			canonical
			metaDesc
			metaKeywords
			opengraphAuthor
			opengraphDescription
			opengraphModifiedTime
			opengraphPublishedTime
			opengraphPublisher
			opengraphSiteName
			opengraphTitle
			opengraphType
			opengraphUrl
			title
			twitterDescription
			twitterImage {
				altText
				id
				srcSet
			}
			twitterTitle
		}
		featuredImage {
			node {
				altText
				id
				srcSet
			}
		}
	}
`;

export default PageFragment;
