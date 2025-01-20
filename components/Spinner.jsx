import React from "react";
import SiteLogo from "@/components/SiteLogo";

const Spinner = (animation = "pulse") => {
	return (
		<div className={`animate-${animation}`}>
			<SiteLogo/>
		</div>
	);
};

export default Spinner;
