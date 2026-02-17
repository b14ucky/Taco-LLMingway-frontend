import { ReactNode } from "react";

export default function Column({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<section
			className={`
                bg-neutral-950 rounded-2xl p-3 
                flex flex-col items-center
                w-full h-fit min-h-75
				overflow-hidden
                md:h-full
                ${className}
            `}
		>
			{children}
		</section>
	);
}
