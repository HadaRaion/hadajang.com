'use client';

import { useState } from 'react';

type ButtonProps = {
	href: string;
	label: string;
};

export default function Button({ href, label }: ButtonProps) {
	const setSpanPosition = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (e.currentTarget) {
			console.log(e.currentTarget);

			console.log(e.currentTarget.getBoundingClientRect());
			console.log(e.pageX);
			let parentOffset = e.currentTarget.getBoundingClientRect(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			e.currentTarget.querySelector('span')!.style.top = relY + 'px';
			e.currentTarget.querySelector('span')!.style.left = relX + 'px';
		}
	};

	const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
		setSpanPosition(e);
	};

	const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
		setSpanPosition(e);
	};

	return (
		<a
			className="btn relative flex items-center justify-center w-56 h-20 border-[3px] border-black rounded-[1.2rem] overflow-hidden font-round text-xl font-bold"
			href={href}
			target="_blank"
			title="New tap"
			onMouseEnter={handleMouseEnter}
			onMouseOut={handleMouseOut}>
			{label}
			<span className="absolute block bg-primary"></span>
		</a>
	);
}
