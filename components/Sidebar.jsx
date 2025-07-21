import React from "react";

const Sidebar = ({
	className,
	children
}) => {
	return (
		<aside className={className}>
			{children}
		</aside>
	);
};

export default Sidebar;
