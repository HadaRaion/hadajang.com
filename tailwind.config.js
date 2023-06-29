/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: 'rgb(var(--color-dark) / <alpha-value>)',
			light: 'rgb(var(--color-light) / <alpha-value>)',
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
			black: '#000',
			white: '#fff',
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-nunito-sans)'],
				round: ['var(--font-nunito)'],
			},
			minHeight: {
				screenHeightWithoutHeader: 'calc(100dvh - 5rem)',
			},
			height: {
				screenHeightWithoutHeader: 'calc(100dvh - 5rem)',
			},
			borderRadius: {
				large: '1.2rem',
			},
			keyframes: {
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				},
			},
		},
	},
	plugins: [],
};
