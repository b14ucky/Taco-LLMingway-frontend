import { ReactNode } from "react";

interface InfoCardProps {
	title: string;
	iconColor: string;
	children: ReactNode;
	className?: string;
}

export default function InfoCard({
	title,
	iconColor,
	children,
	className = "",
}: InfoCardProps) {
	return (
		<div
			className={`bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg ${className}`}
		>
			<div className="flex items-center gap-2 mb-3">
				<div className={`w-2 h-2 ${iconColor} rounded-full`}></div>
				<h3 className="text-white font-bold font-mono whitespace-nowrap">
					{title}
				</h3>
			</div>
			{children}
		</div>
	);
}
