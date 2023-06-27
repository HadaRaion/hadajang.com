import Card from './Card';
import Container from './Container';

export default function RecentWorks() {
	const works = [
		{
			title: 'Amanda de Waal Therapy',
			description:
				'Built a website for a BC Registered Clinical Counsellor. Handled everything from logo design to deployment. Utilized TypeScript, Next.js, Tailwind CSS, and Framer Motion for development. Integrated Instagram API and Nodemailer for enhanced functionality.',
			skills: [
				'React',
				'Next.js',
				'TypeScript',
				'Tailwind CSS',
				'Framer Motion',
			],
			demoLink: 'https://www.amandadewaaltherapy.com/',
			githubLink: 'https://github.com/HadaRaion/amanda-de-waal-therapy',
			image: '/images/place-holder.jpg',
		},
		{
			title: 'Aestehclear',
			description:
				"Created a website for a cosmetic clinic and customised a WordPress theme. Yoast SEO was used to implement SEO techniques and ensure the website's exposure on search engines like Google.",
			skills: ['PHP', 'CSS', 'JavaScript', 'WordPress'],
			demoLink: 'https://aestheclear.com/',
			image: '/images/place-holder.jpg',
		},
		{
			title: 'KEAD Webzine',
			description:
				"Created a WordPress theme for Korea Employment Agency for Persons with Disabilities's monthly online magazine. Used Git for version control and PHP, HTML, CSS, and JavaScript for development. Received more than 600 members and a certification for web accessibility from the Ministry of Science and ICT.",
			skills: ['PHP', 'Sass', 'JavaScript', 'WordPress'],
			demoLink: 'https://kead-webzine.or.kr/',
			githubLink: 'https://github.com/HadaRaion/kead-webzine',
			image: '/images/place-holder.jpg',
		},
		{
			title: 'Disaster Alert Mock-up',
			description:
				"Created progressive web app (PWA) for the Korea Broadcasting System. JavaScript, HTML, CSS, and the Notification API were used in the development process in order to provide push notifications. Created for the Disaster Alert Mock-up service to improve Korea's present disaster alert system by simulating events like typhoons, forest fires, and earthquakes.",
			skills: ['HTML', 'Sass', 'JavaScript'],
			githubLink: 'https://github.com/HadaRaion/mobile-disaster-alert',
			image: '/images/place-holder.jpg',
		},
		{
			title: 'Quantinum Investment',
			description:
				'Built a multi-language website, leveraging Next.js, Sass, and Framer Motion for development. Implemented i18next for seamless multi-language support.',
			skills: [
				'React',
				'Next.js',
				'Sass',
				'JavaScript',
				'Framer Motion',
				'i18next',
			],
			demoLink: 'https://quantinuminvestment.com/',
			githubLink: 'https://github.com/HadaRaion/mobile-disaster-alert',
			image: '/images/place-holder.jpg',
		},
	];

	return (
		<section className="pt-28">
			<Container>
				<h3 className="font-round font-bold text-3xl">See my latest works</h3>
				<ul>
					{works.map((work, index) => (
						<li
							key={index}
							className="border-b border-light/20 last:border-b-0">
							<Card {...work} />
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
