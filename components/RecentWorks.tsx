import Card from './Card';
import Container from './Container';

export default function RecentWorks() {
	const works = [
		{
			title: 'Amanda de Waal Therapy',
			description:
				'Created a comprehensive website for a Registered Clinical Counsellor, including logo design, web design, and development.  The website garnered 4 new patients in the first month after launch. Leveraged Next.js for fast loading times and optimized SEO. Implemented Nodemailer for seamless email communication and integrated Instagram API to display client feeds. Added a convenient appointment booking link for existing patients.',
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
				"Developed the website for Aestheclear, a Sydney-based skincare clinic. Despite budget constraints, achieved robust internal content management through a customized WordPress theme. Carefully selected a theme aligned with the clinic's brand, making adjustments to colors, fonts, and layout. Optimized search performance using Yoast SEO plugin. The result is a professional, user-friendly website showcasing Aestheclear's services within budgetary constraints.",
			skills: ['PHP', 'CSS', 'JavaScript', 'WordPress'],
			demoLink: 'https://aestheclear.com/',
			image: '/images/thumb-aestheclear.jpg',
		},
		{
			title: 'KEAD Webzine',
			description:
				'Transformed a monthly print magazine by Korea Employment Agency for Persons with Disabilities into a web-based magazine. Developed a custom WordPress theme for uploading articles and created a user-friendly block editor for different designs. Integrated a Form page for subscriber reviews and event participation. Achieved over 600 subscribers through Stibee newsletter service, complying with web accessibility standards and receiving certification.',
			skills: ['PHP', 'Sass', 'JavaScript', 'WordPress'],
			demoLink: 'https://kead-webzine.or.kr/',
			githubLink: 'https://github.com/HadaRaion/kead-webzine',
			image: '/images/thumb-kead.jpg',
		},
		{
			title: 'Disaster Alert Mock-up',
			description:
				"As part of the national project 'Customized Disaster Media Service Platform Development for Recognizing Vulnerable Groups', collaborated with Korean Broadcasting System on a mock-up project for a tailored disaster media service platform. Developed web applications for UHD TVs and smart devices, simulating scenarios such as earthquakes, wildfires, and typhoons. Designed a web app interface and utilized the Notification API to send push alerts and provide additional information. ",
			skills: ['HTML', 'Sass', 'JavaScript'],
			githubLink: 'https://github.com/HadaRaion/mobile-disaster-alert',
			image: '/images/thumb-kbs.jpg',
		},
		{
			title: 'Quantinum Investment',
			description:
				'Created a website for an investment advisory firm targeting both Korean and international clients. Developed with Next.js for optimized SEO, fast loading times, and multi-language support using i18next. Utilized Lottie animations for a dynamic slideshow effect on the main page. Curated professional photos and implemented a clean layout to instill trust. Employed Framer Motion to add subtle animations for a fresh and engaging user experience.',
			skills: [
				'React',
				'Next.js',
				'Sass',
				'JavaScript',
				'Framer Motion',
				'i18next',
			],
			demoLink: 'https://quantinuminvestment.com/',
			githubLink: 'https://github.com/HadaRaion/quantinum',
			image: '/images/thumb-qi.jpg',
		},
	];

	return (
		<section className="pt-16 xl:pt-28 pb-4" aria-label="Works">
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
