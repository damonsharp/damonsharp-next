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
		<Link href="/">
			<Image
				className={className}
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
