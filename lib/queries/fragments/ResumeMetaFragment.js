import { gql } from "@apollo/client";

const ResumeMetaFragment = gql`
	fragment ResumeMetaFragment on ResumeMeta {
		projects {
			sectionTitleIcon
			sectionTitle
			content
			buttonIcon
			button {
				title
				url
				target
			}
		}
		highlightsSkills {
			column {
				icon
				skill {
					content
					icon
				}
				title
			}
		}
		employment {
			icon
			jobEntry {
				company
				currentEmployer
				endDate
				jobTitle
				startDate
				responsibilities {
					icon
					task
				}
			}
			sectionTitle
		}
		communityEducation {
			column {
				content
				contentType
				icon
				skill {
					content
					icon
				}
				title
			}
		}
		subtitle
	}
`;

export default ResumeMetaFragment;
