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
                bg-black border border-neutral-800 rounded-xl p-3 
                flex flex-col
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
