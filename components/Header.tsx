import Link from 'next/link';
import Container from './Container';

export default function Header() {
	return (
		<header className="h-24 flex items-center">
			<Container>
				<h1 className="font-round text-2xl font-bold">
					<Link href="/">Hada Jang</Link>
				</h1>
			</Container>
		</header>
	);
}
