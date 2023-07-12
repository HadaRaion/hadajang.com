'use client';

import { gsap } from 'gsap';
import Image from 'next/image';

export default function ProfileImage() {
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		let winPercent = {
			x: e.clientX / window.innerWidth,
			y: e.clientY / window.innerHeight,
		};

		gsap
			.timeline({ defaults: { duration: 0.5, overwrite: 'auto' } })
			.to(
				'.bottomBox',
				{ x: 100 * winPercent.x, y: 100 - 200 * winPercent.y },
				0
			);
	};

	const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
		gsap.to('.bottomBox', {
			x: 0,
			y: 0,
		});
	};

	return (
		<div
			className="w-full h-full grid place-items-center aspect-[3/4]"
			onMouseMove={handleMouseMove}
			onMouseOut={handleMouseOut}>
			<div className="relative w-[80%] h-[80%]">
				<div className="absolute border w-full h-full placeholder:inset-0 border-hada">
					<Image src="/images/profile-hada.jpg" alt="Profile" fill priority />
				</div>

				<div className="bottomBox absolute w-full h-full rounded-large bg-primary z-[-1] overflow-hidden flex flex-col justify-between">
					<p className="font-bold text-xl m-4">
						Do you know what I am gonna like?
					</p>
					<p className="font-bold text-xl m-4 text-right">
						You call me HADDA not HAYDA 😉
					</p>
				</div>
			</div>
		</div>
	);
}
