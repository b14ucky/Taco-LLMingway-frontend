export default function Column({
	children,
	flex,
}: {
	children: React.ReactNode;
	flex: number;
}) {
	return (
		<section
			style={{ flex: flex }}
			className="bg-neutral-950 rounded-2xl p-3 min-h-0 flex flex-col items-center"
		>
			{children}
		</section>
	);
}
