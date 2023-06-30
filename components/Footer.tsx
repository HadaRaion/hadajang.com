import Container from './Container';

const contactInfo = [
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/hadajang/',
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
		<footer className="bg-black w-full text-white py-16 xl:py-28">
			<Container>
				<h3 className="text-[2.5rem] md:text-[3rem] lg:text-6xl font-black">
					Get In Touch
				</h3>
				<ul className="flex gap-10 mt-4 xl:mt-8" aria-label="Contact links">
					{contactInfo.map(info => (
						<li key={info.title}>
							<a
								className="text-light hover:text-white"
								href={info.link}
								target="_blank"
								rel="noreferrer"
								title="New tab">
								{info.title}
							</a>
						</li>
					))}
				</ul>
				<p className="text-light mt-20 xl:mt-36">
					© Hada Jang. All Rights Reserved.
				</p>
			</Container>
		</footer>
	);
}
