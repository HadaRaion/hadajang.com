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
		<div className="flex gap-40 py-24">
			<div className="w-1/2 flex flex-col">
				<div className="relative aspect-[16/9] w-full border-hada">
					<Image src={image} alt={title} fill />
				</div>
				<div className="flex justify-between gap-10 mt-6">
					<Button href={demoLink} label="Live Demo" fullWidth />
					<Button href={githubLink} label="View Source" fullWidth />
				</div>
			</div>
			<div className="w-1/2 flex flex-col">
				<h4 className="text-4xl font-bold">{title}</h4>
				<ul className="flex my-8">
					{skills.map(skill => (
						<li
							key={skill}
							className="text-md after:content-['/'] after:mx-0.5 last:after:content-[''] ">
							{skill}
						</li>
					))}
				</ul>
				<p className="text-xl leading-relaxed">{description}</p>
			</div>
		</div>
	);
}
