import {
	Geist,
	Geist_Mono
} from 'next/font/google';
import './globals.css';
import ApolloWrapper from '@/components/ApolloWrapper';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Damon Sharp',
	description: 'Senior Web Engineer',
};

export default function RootLayout ({ children }) {
	return (
		<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
		<ApolloWrapper>
			<Header/>
			<main className="p-12">
				{children}
			</main>
			<Footer/>
		</ApolloWrapper>
		</body>
		</html>
	)
}
