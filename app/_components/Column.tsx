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
			className="bg-neutral-950 rounded-2xl p-3 h-full flex flex-col overflow-hidden"
		>
			{children}
		</section>
	);
}
