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
			'border border-light/20 w-maxWidthSection mx-auto px-4 sm:px-8 lg:px-12 lg:text-left',
			className
		)}>
		{children}
	</div>
);

export default Container;
