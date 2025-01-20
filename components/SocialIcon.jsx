import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon ({ link, icon, classes }) {
	const Icon = icon;
	return (
		<Link href={link}>
			<FontAwesomeIcon icon={icon} className={classes}/>
		</Link>
	);
}

export default SocialIcon;
