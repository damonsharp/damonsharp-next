import React from "react";
import getPage from "@/lib/queries/getPage";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import ResumeIntro from "@/components/ResumeIntro";
import ResumeHighlightsSkills from "@/components/ResumeHighlightsSkills";
import ResumeProjects from "@/components/ResumeProjects";
import ResumeCommunityEd from "@/components/ResumeCommunityEd";

export async function generateMetadata () {
	return {
		title: "Resume/CV"
	};
}

export default async function ResumePage () {
	const { page } = await getPage("resume", false, true);
	const {
		title,
		content,
		resumeMeta
	} = page;

	return (
		<>
			<ResumeIntro title={title} content={content} subtitle={resumeMeta.subtitle}/>
			<ResumeHighlightsSkills highlightsSkills={resumeMeta.highlightsSkills}/>
			<ProfessionalExperience employment={resumeMeta.employment}/>
			<ResumeProjects projects={resumeMeta.projects}/>
			<ResumeCommunityEd communityEducation={resumeMeta.communityEducation}/>
		</>
	);
}
