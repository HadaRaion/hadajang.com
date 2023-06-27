import Container from './Container';
import Button from './Button';
import ProfileImage from './ProfileImage';

export default function Hero() {
	return (
		<section className="pt-12 pb-24">
			<Container className="flex items-center">
				<span className="w-3/5">
					<h2 className="text-[7rem] leading-none uppercase font-extrabold">
						FrontEnd
						<br />
						developer
					</h2>
					<p className="text-2xl leading-relaxed mt-8 w-11/12">
						I’m Hada, a creative Front end developer blending design expertise
						with technical skills to deliver compelling web experiences.
					</p>
					<div className="flex gap-4 mt-20">
						<Button
							href="https://www.linkedin.com/in/hadajang/"
							label="View Linkedin"
						/>
						<Button href="mailto:hadathing@gmail.com" label="Contact me" />
					</div>
				</span>
				<span className="w-2/5">
					<ProfileImage />
				</span>
			</Container>
		</section>
	);
}
