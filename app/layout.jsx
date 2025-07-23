import {
	Geist,
	Geist_Mono
} from "next/font/google";
import "@/assets/styles/global.css";
import ApolloWrapper from "@/components/ApolloWrapper";
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

export const metadata = {
	title: {
		template: "%s | Damon Sharp",
		default: "Damon Sharp"
	},
	description: "Senior Web Engineer from Ohio, USA specializing in PHP, React/Next.js, WordPress and Laravel web solutions.",
};

export default function RootLayout ({ children }) {
	return (
		<html lang="en" className="min-h-screen bg-accent">
		<body className={`bg-neutral text-primary${geistSans.variable} ${geistMono.variable}`}>
		<ApolloWrapper>
			<main className="flex flex-col h-screen ">
				<Header/>
				<div className="mb-auto">
					{children}
				</div>
				<Footer/>
			</main>
		</ApolloWrapper>
		</body>
		</html>
	);
}
