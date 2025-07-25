import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon ({
	label,
	link,
	icon,
	className
}) {
	return (
		<Link href={link} aria-label={label}>
			<FontAwesomeIcon icon={icon} className={className}/>
		</Link>
	);
}

export default SocialIcon;
