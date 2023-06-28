import classNames from 'classnames';

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={classNames(
			'w-full 2xl:max-w-[88rem] mx-auto px-4 sm:px-8 xl:px-12',
			className
		)}>
		{children}
	</div>
);

export default Container;
