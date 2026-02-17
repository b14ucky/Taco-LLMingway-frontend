interface TempCardProps {
	range: string;
	title: string;
	description: string;
	borderColor: string;
	bgColor: string;
	textColor: string;
}

export default function TempCard({
	range,
	title,
	description,
	borderColor,
	bgColor,
	textColor,
}: TempCardProps) {
	return (
		<div
			className={`border ${borderColor} ${bgColor} p-3 rounded flex flex-col justify-between`}
		>
			<span className={`${textColor} font-bold block mb-1`}>{range}</span>
			<span className="text-white mb-1">{title}</span>
			<span className="text-neutral-500 text-xs">{description}</span>
		</div>
	);
}
