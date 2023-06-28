import './globals.css';
import { Inter, Nunito, Nunito_Sans } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const nunito = Nunito({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nunito',
});

const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nunito-sans',
});

export const metadata = {
	title: 'Hada Jang',
	description:
		'A creative Front end developer blending design expertise with technical skills to deliver compelling web experiences.',
	applicationName: 'Hada Jang',
	type: 'Portfolio',
	keywords: [
		'Hada Jang',
		'Frontend Developer',
		'Freelancer',
		'Portfolio',
		'Web design',
		'Vancouver',
	],
	authors: [{ name: 'Hada Jang', url: 'https://www.hadajang.com' }],
	colorScheme: 'light',
	creator: 'Hada Jang',
	publisher: 'Hada Jang',
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} ${nunito_sans.variable}`}>
				<Header />
				<main className="w-full">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
