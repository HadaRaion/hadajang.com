'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProfileImage() {
	const [bottomBoxPosition, setBottomBoxPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = event;
		const { left, top, width, height } =
			event.currentTarget.getBoundingClientRect();

		const x = ((clientX - left) / width) * 100;
		const y = ((clientY - top) / height) * 100;
	};

	return (
		<div className="relative aspect-[3/4] m-8" onMouseMove={handleMouseMove}>
			<div className="absolute border w-full h-full inset-0 border-hada">
				<Image src="/images/profile.jpg" alt="Profile" fill priority />
			</div>

			<div
				className="bottomBox absolute border w-full h-full rounded-large bg-primary z-[-1]"
				// style={{
				// 	transform: `translate(${bottomBoxPosition.x}%, ${bottomBoxPosition.y}%)`,
				// }}
			></div>
		</div>
	);
}
