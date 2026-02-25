import { ReactNode } from "react";

export default function CodeBadge({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`font-mono text-xs bg-black p-2 rounded border border-neutral-700 text-neutral-300 ${className}`}
		>
			{children}
		</div>
	);
}
