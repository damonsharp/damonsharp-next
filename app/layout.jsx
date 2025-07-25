import {
	Geist,
	Geist_Mono
} from "next/font/google";
import "@/assets/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export async function generateMetadata () {
	return {
		title: {
			template: "%s | Damon Sharp",
			default: "Damon Sharp"
		},
		description: "Senior Web Engineer from Ohio, USA specializing in PHP, React/Next.js, WordPress and Laravel web solutions.",
	};
}

export default function RootLayout ({
	children,
	params
}) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
		<body className="bg-neutral text-primary min-h-screen">
		<main className="flex flex-col h-screen ">
			<Header params={params}/>
			<div className="mb-auto">
				{children}
			</div>
			<Footer/>
		</main>
		</body>
		</html>
	);
}
