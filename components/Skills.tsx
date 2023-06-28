import Container from './Container';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiSass,
	SiTailwindcss,
	SiGit,
	SiWordpress,
	SiFigma,
	SiAdobexd,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobepremierepro,
	SiAdobeaftereffects,
	SiAdobeindesign,
} from 'react-icons/si';

const skills = [
	{
		title: 'HTML',
		icon: <SiHtml5 />,
	},
	{
		title: 'CSS',
		icon: <SiCss3 />,
	},
	{
		title: 'JavaScript',
		icon: <SiJavascript />,
	},
	{
		title: 'React',
		icon: <SiReact />,
	},
	{
		title: 'Next.js',
		icon: <SiNextdotjs />,
	},
	{
		title: 'Sass',
		icon: <SiSass />,
	},
	{
		title: 'Tailwind CSS',
		icon: <SiTailwindcss />,
	},
	{
		title: 'Git',
		icon: <SiGit />,
	},
	{
		title: 'WordPress',
		icon: <SiWordpress />,
	},
];

const tools = [
	{
		title: 'Figma',
		icon: <SiFigma />,
	},
	{
		title: 'Adobe XD',
		icon: <SiAdobexd />,
	},
	{
		title: 'Photoshop',
		icon: <SiAdobephotoshop />,
	},
	{
		title: 'Illustrator',
		icon: <SiAdobeillustrator />,
	},
	{
		title: 'Premiere Pro',
		icon: <SiAdobepremierepro />,
	},
	{
		title: 'After Effects',
		icon: <SiAdobeaftereffects />,
	},
	{
		title: 'InDesign',
		icon: <SiAdobeindesign />,
	},
];

export default function Skills() {
	const iconStyle =
		'w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 p-[0.7rem] lg:p-4 xl:p-5 border-hada-light';
	return (
		<section className="bg-black w-full text-white py-16 lg:pt-28 lg:pb-32">
			<Container className="flex flex-col items-center">
				<h3 className="font-round font-bold text-2xl xl:text-3xl">
					My skills and tools for my work
				</h3>

				<ul className="icons flex flex-wrap justify-center gap-2 lg:gap-4 mt-16 lg:mt-20">
					{skills.map(skill => (
						<li key={skill.title} className={iconStyle}>
							{skill.icon}
						</li>
					))}
				</ul>
				<ul className="icons flex flex-wrap justify-center gap-2 lg:gap-4 mt-12 lg:mt-6">
					{tools.map(tools => (
						<li key={tools.title} className={iconStyle}>
							{tools.icon}
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
