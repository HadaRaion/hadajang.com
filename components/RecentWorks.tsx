import Card from './Card';
import Container from './Container';

export default function RecentWorks() {
	const works = [
		{
			title: 'Amanda de Waal Therapy',
			description:
				'A project created for a newly registered clinical counselor, Amanda de Waal Therapy involved designing a logo to match the desired aesthetic. With a focus on SEO optimization and fast TTV and FCP, the website was developed using Next.js. To facilitate easy contact, Nodemailer was integrated to enable visitors to send emails directly from the website. Instagram API was utilized to display client feeds, establishing a sense of familiarity and trust. Additionally, a prominent link for additional appointments was placed at the bottom of the screen. The website was registered on Google and attracted 4 new patients within the first month.',
			skills: [
				'React',
				'Next.js',
				'TypeScript',
				'Tailwind CSS',
				'Framer Motion',
			],
			demoLink: 'https://www.amandadewaaltherapy.com/',
			githubLink: 'https://github.com/HadaRaion/amanda-de-waal-therapy',
			image: '/images/thumb-amanda.jpg',
		},
		{
			title: 'Aestehclear',
			description:
				"Developed the website for Aestheclear, a Sydney-based skincare clinic. Despite budget constraints, we achieved robust internal content management through a customized WordPress theme. Carefully selected a theme aligned with the clinic's brand, making adjustments to colors, fonts, and layout. Optimized search performance using Yoast SEO plugin. The result is a professional, user-friendly website showcasing Aestheclear's services within budgetary constraints.",
			skills: ['PHP', 'CSS', 'JavaScript', 'WordPress'],
			demoLink: 'https://aestheclear.com/',
			image: '/images/thumb-aestheclear.jpg',
		},
		{
			title: 'KEAD Webzine',
			description:
				'This project involved transforming a monthly magazine published by the Korea Employment Agency for Persons with Disabilities into a web-based magazine. WordPress CMS was used for internal article uploads, and a custom theme was developed for a tailored design. A WordPress admin page block editor was created to allow unique designs for articles in different categories. A form page was created for subscription reviews and event participation. Integration with the Stibee newsletter service resulted in over 600 subscribers receiving monthly newsletters. The website prioritized web accessibility and received certification from the Ministry of Science and ICT.',
			skills: ['PHP', 'Sass', 'JavaScript', 'WordPress'],
			demoLink: 'https://kead-webzine.or.kr/',
			githubLink: 'https://github.com/HadaRaion/kead-webzine',
			image: '/images/thumb-kead.jpg',
		},
		{
			title: 'Disaster Alert Mock-up',
			description:
				"As part of the national project 'Customized Disaster Media Service Platform Development for Recognizing Vulnerable Groups', a mock-up of a disaster information app was developed for exhibition purposes on UHD TVs and smart devices since 2019. Various scenarios were created for earthquakes, wildfires, and typhoons, and web app planning was conducted. An administrator mode was implemented to send different alerts to devices based on the scenarios. Leveraging the Notification API, push notifications were sent to smart devices, directing users to specific pages for additional information. The demonstration was successfully completed, and the actual app development for service will begin in the latter half of 2023.",
			skills: ['HTML', 'Sass', 'JavaScript'],
			githubLink: 'https://github.com/HadaRaion/mobile-disaster-alert',
			image: '/images/thumb-kbs.jpg',
		},
		{
			title: 'Quantinum Investment',
			description:
				'This project involved creating a website for an investment advisory company targeting both domestic and international clients. To optimize SEO and ensure fast TTV and FCP, Next.js was used for development, while i18next was implemented for multilingual services. Lottie was used to convert animations created by a BI production company, providing a slideshow effect on the homepage with faster loading than videos. Carefully selected images showcased expertise, and a clean layout was designed to instill trust. Framer Motion was utilized to add subtle animations, creating a fresh and lightweight user experience.',
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
			image: '/images/thumb-qi.jpg',
		},
	];

	return (
		<section className="pt-16 xl:pt-28 pb-4">
			<Container>
				<h3 className="font-round font-bold text-2xl xl:text-3xl text-center lg:text-left">
					See my latest works
				</h3>
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
