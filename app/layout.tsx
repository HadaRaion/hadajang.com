import './globals.css';
import { Inter, Nunito, Nunito_Sans } from 'next/font/google';

const nunito = Nunito({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nunito',
});

const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nonito-sans',
});

export const metadata = {
	title: 'Hada Jang',
	description:
		'A creative Front end developer blending design expertise with technical skills to deliver compelling web experiences.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} ${nunito_sans.variable}`}>
				{children}
			</body>
		</html>
	);
}
