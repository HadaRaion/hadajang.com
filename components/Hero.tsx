import Container from './Container';
import Button from './Button';
import ProfileImage from './ProfileImage';

export default function Hero() {
	return (
		<section className="pb-16 lg:pt-12 xl:pb-24" aria-label="Profile">
			<Container className="flex flex-col lg:flex-row lg:items-center">
				<span className="w-full lg:w-7/12 text-center lg:text-left mt-4 lg:mt-0">
					<h2 className="text-5xl lg:text-7xl xl:text-[7rem] leading-none uppercase font-extrabold">
						FrontEnd
						<br />
						developer
					</h2>
					<p className="text-xl lg:text-2xl leading-relaxed mt-6 lg:mt-8">
						I’m Hada, a creative Front end developer blending design expertise
						with technical skills to deliver compelling web experiences.
					</p>
					<div className="flex justify-center lg:justify-normal gap-4 mt-10 lg:mt-20">
						<Button
							href="https://www.linkedin.com/in/hadajang/"
							label="View Linkedin"
						/>
						<Button href="mailto:hadathing@gmail.com" label="Contact me" />
					</div>
				</span>
				<span className="w-full lg:w-5/12 order-first lg:order-last">
					<ProfileImage />
				</span>
			</Container>
		</section>
	);
}
