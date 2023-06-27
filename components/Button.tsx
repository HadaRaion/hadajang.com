'use client';

import { useState } from 'react';

type ButtonProps = {
	href?: string;
	label: string;
	fullWidth?: boolean;
};

export default function Button({ href, label, fullWidth }: ButtonProps) {
	const setSpanPosition = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (e.currentTarget) {
			let parentOffset = e.currentTarget.getBoundingClientRect(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top - window.scrollY; // Subtract the current scroll position
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

	return href ? (
		<a
			className={`btn relative flex items-center justify-center h-20 border-hada font-round text-xl font-bold ${
				fullWidth ? 'w-full' : 'w-56'
			}`}
			href={href}
			target="_blank"
			title="New tap"
			onMouseEnter={handleMouseEnter}
			onMouseOut={handleMouseOut}>
			{label}
			<span className="absolute block bg-primary"></span>
		</a>
	) : (
		<div
			className={`btn relative flex items-center justify-center h-20 border-hada font-round text-xl font-bold ${
				fullWidth ? 'w-full' : 'w-56'
			}`}
			aria-label="Disabled button">
			Coming Soon
		</div>
	);
}
