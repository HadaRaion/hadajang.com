import Container from './Container';

const contactInfo = [
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/hada-jang-0a1a1a1a1/',
	},
	{
		title: 'GitHub',
		link: 'https://github.com/HadaRaion',
	},
	{
		title: 'Email',
		link: 'mailto:hadajang@gmail.com',
	},
];
export default function Footer() {
	return (
		<footer className="bg-black w-full text-white py-28">
			<Container>
				<h3 className="text-6xl font-black">Get In Touch</h3>
				<ul className="flex gap-10 mt-8">
					{contactInfo.map(info => (
						<li key={info.title}>
							<a
								className="text-light hover:text-white"
								href={info.link}
								target="_blank"
								rel="noreferrer">
								{info.title}
							</a>
						</li>
					))}
				</ul>
				<p className="text-light mt-36">© Hada Jang. All Rights Reserved.</p>
			</Container>
		</footer>
	);
}
