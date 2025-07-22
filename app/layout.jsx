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
	title: "Damon Sharp",
	description: "Senior Web Engineer",
};

export default function RootLayout ({ children }) {
	return (
		<html lang="en" className="min-h-screen bg-accent">
		<body className={`bg-neutral text-primary ${geistSans.variable} ${geistMono.variable}`}>
		<ApolloWrapper>
			<main className="flex flex-col align-center">
				<Header/>
				<div>
					{children}
				</div>
				<Footer/>
			</main>
		</ApolloWrapper>
		</body>
		</html>
	);
}
