'use client';

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

	const btnClass = `btn relative flex items-center justify-center h-14 lg:h-16 xl:h-20 border-hada font-round text-base lg:text-lg xl:text-xl font-bold focus:ring-offset-2 ${
		fullWidth ? 'w-full' : 'w-56'
	}`;

	return href ? (
		<a
			className={btnClass}
			href={href}
			target="_blank"
			title="New tap"
			onMouseEnter={handleMouseEnter}
			onMouseOut={handleMouseOut}>
			{label}
			<span className="absolute block bg-primary h-1"></span>
		</a>
	) : (
		<div className={btnClass} aria-label="Disabled button">
			Coming Soon
		</div>
	);
}
