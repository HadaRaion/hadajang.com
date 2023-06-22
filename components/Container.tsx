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
			'mx-5 sm:mx-8 lg:mx-12 2xl:mx-16 bg-primary',
			className
		)}>
		{children}
	</div>
);

export default Container;
