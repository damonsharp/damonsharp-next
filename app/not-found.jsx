import React from "react";
import Image from "next/image";

const NotFound = () => {
	return (
		<section
			className="absolute top-0 right-0 bottom-0 left-0 z-10 -mt-6 pb-6 bg-[url(/matrix.gif)] bg-cover">
			<div
				className="flex flex-col justify-center text-center w-full h-full px-4 bg-black text-neutral text-center opacity-70 rounded-lg">
				<h1 className="text- text-neutral text-9xl">404</h1>
				<h2 className="text-neutral">Did you follow the white rabbit?</h2>
				<p>Looks like there may be a glitch in the matrix impacting what you're looking for.</p>
				<p>The navigation menu above is a good place to start.</p>
			</div>
		</section>
	);
};

export default NotFound;
