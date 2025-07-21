import React from "react";
import { SyncLoader } from "react-spinners";

const Spinner = ({className = "animate-gyrate"}) => {

	return (
		<div className='flex space-x-2 justify-center items-center py-48 bg-none dark:invert'>
			<span className='sr-only'>Loading...</span>
			<div className='h-4 w-4 bg-neutral rounded-full animate-bounce [animation-delay:-0.5s]'></div>
			<div className='h-4 w-4 bg-neutral rounded-full animate-bounce [animation-delay:-0.25s]'></div>
			<div className='h-4 w-4 bg-neutral rounded-full animate-bounce'></div>
		</div>
	);
};

export default Spinner;
