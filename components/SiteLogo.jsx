import Image from "next/image";
import logo from "@/public/dws-logo.svg";

const SiteLogo = ({
	width = 50,
	height = 50,
	className,
	prioritize = false
}) => {
	return (
		<Image
			className={className}
			src={logo}
			alt="Damon Sharp Logo"
			width={width}
			height={height}
			priority={prioritize}
		/>
	);
};

export default SiteLogo;
