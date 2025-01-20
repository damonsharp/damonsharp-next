import Image from 'next/image'
import logo from '@/public/dws-logo.svg'

const SiteLogo = ({
	width = 46,
	height = 50,
	classes,
	prioritize = false
}) => {
	return (
		<Image
			className={`logo-svg ${classes}`}
			src={logo}
			alt="Damon Sharp Logo"
			width={width}
			height={height}
			priority={prioritize}
		/>
	)
}

export default SiteLogo
