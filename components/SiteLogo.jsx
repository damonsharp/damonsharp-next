import Image from "next/image";
import logo from "@/public/dws-logo.svg";
import Link from "next/link";

const SiteLogo = ({
	width = 50,
	height = 50,
	className,
	prioritize = false
}) => {
	return (
		<Link className={className} href="/" aria-label="Link to the home page">
			<Image
				src={logo}
				alt="Damon Sharp Logo"
				width={width}
				height={height}
				priority={prioritize}
			/>
		</Link>
	);
};

export default SiteLogo;
