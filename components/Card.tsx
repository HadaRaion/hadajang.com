import Image from 'next/image';
import Button from './Button';

type Props = {
	title: string;
	description?: string;
	skills: string[];
	demoLink?: string;
	githubLink?: string;
	image: string;
};

export default function Card({
	title,
	description,
	skills,
	demoLink,
	githubLink,
	image,
}: Props) {
	return (
		<div className="flex flex-col lg:flex-row gap-10 xl:gap-28 py-12 xl:py-24">
			<div className="w-full lg:w-1/2 flex flex-col">
				<div className="relative aspect-[16/9] w-full border-hada">
					<Image
						src={image}
						alt={title + ' thumbnail'}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
				<div className="flex justify-between gap-4 xl:gap-10 mt-4 xl:mt-6">
					<Button href={demoLink} label="Live Demo" fullWidth />
					<Button href={githubLink} label="View Source" fullWidth />
				</div>
			</div>
			<div className="w-full lg:w-1/2 flex flex-col">
				<h4 className="text-2xl lg:text-4xl font-bold">{title}</h4>
				<ul className="flex my-4 lg:my-8" aria-label="Skills I used">
					{skills.map(skill => (
						<li
							key={skill}
							className="text-sm lg:text-md text-light after:content-['/'] after:mx-0.5 last:after:content-[''] ">
							{skill}
						</li>
					))}
				</ul>
				<p className="text-base xl:text-xl leading-relaxed">{description}</p>
			</div>
		</div>
	);
}
