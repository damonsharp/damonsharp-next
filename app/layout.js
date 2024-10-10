import {
	Manrope,
} from "next/font/google";
import "./global.css";
import Header from "@/app/components/Header";

const manrope = Manrope( {
	subsets: [ "latin" ],
	display: "swap"
} );

export const metadata = {
	title: "Damon Sharp - Web Engineer",
	description: "I'm a web engineering leader from Marysville, OH specializing in PHP, WordPress, and Laravel applications, themes, plugins, and everything in between.",
};

export default function RootLayout( { children } ) {
	return (
		<html lang="en">
		<body className={manrope.className}>
		<Header/>
		<main className="grid">
			{children}
		</main>
		</body>
		</html>
	);
}
