import {
	Geist,
	Geist_Mono
} from "next/font/google";
import "@/assets/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

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
		robots: {
			index: true,
			follow: true,
			nocache: false,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		}
	};
}

export default function RootLayout ({
	children,
	params
}) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}>
		<GoogleTagManager gtmId="GTM-NR3CSFW5"/>
		<body className="bg-neutral text-primary min-h-screen">
		<main className="flex flex-col h-screen">
			<Header className="flex-none" params={params}/>
			<div className="flex-auto relative">
				{children}
			</div>
			<Footer className="flex-none"/>
		</main>
		</body>
		</html>
	);
}
