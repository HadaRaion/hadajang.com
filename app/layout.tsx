import './globals.css';
import { Inter, Nunito, Nunito_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
