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

const skillsForMarquee = [...skills, ...skills];
const toolsForMarquee = [...tools, ...tools];

export default function Skills() {
	return (
		<section
			className="bg-black w-full text-white py-16 lg:pt-28 lg:pb-32"
			aria-labelledby="skills-title">
			<Container className="flex flex-col items-center">
				<h3
					className="font-round font-bold text-2xl xl:text-3xl"
					id="skills-title">
					My skills and tools for my work
				</h3>

				<ul className="icons mt-20" aria-label="Skills for development">
					{skills.map(skill => (
						<li key={skill.title} className="icon">
							<span className="icon-image" aria-hidden>
								{skill.icon}
							</span>
							<span className="icon-name" data-name={skill.title}></span>
						</li>
					))}
				</ul>
				<ul className="icons mt-6" aria-label="Tools for design">
					{tools.map(tools => (
						<li key={tools.title} className="icon">
							<span className="icon-image" aria-hidden>
								{tools.icon}
							</span>
							<span className="icon-name" data-name={tools.title}>
								<span className="sr-only">{tools.title}</span>
							</span>
						</li>
					))}
				</ul>
			</Container>
			<div className="marquee mt-10 md:mt-16">
				<div className="track">
					<ul className="content" aria-label="Skills for development">
						{skillsForMarquee.map(skill => (
							<li key={skill.title} className="icon">
								<span className="icon-image" aria-hidden>
									{skill.icon}
								</span>
								<span className="icon-name">{skill.title}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="marquee mt-4">
				<div className="track">
					<ul className="content" aria-label="Tools for design">
						{toolsForMarquee.map(tool => (
							<li key={tool.title} className="icon">
								<span className="icon-image" aria-hidden>
									{tool.icon}
								</span>
								<span className="icon-name">{tool.title}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
