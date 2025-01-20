import React from "react";

const Sidebar = ( {
	classes,
	children
} ) => {
	return (
		<aside className={classes}>
			{children}
		</aside>
	);
};

export default Sidebar;