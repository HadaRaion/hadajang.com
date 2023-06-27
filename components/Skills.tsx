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
	return (
		<section className="bg-light w-full text-white bg-black pt-28 py-32">
			<Container className="flex flex-col items-center">
				<h3 className="font-round font-bold text-3xl">
					My skills and tools for my work
				</h3>

				<ul className="flex icons gap-4 mt-20">
					{skills.map(skill => (
						<li key={skill.title} className="w-20 h-20 border-hada-light p-5">
							{skill.icon}
						</li>
					))}
				</ul>
				<ul className="flex icons gap-4 mt-6">
					{tools.map(tools => (
						<li key={tools.title} className="w-20 h-20 border-hada-light p-5">
							{tools.icon}
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
