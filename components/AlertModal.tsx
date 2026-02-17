"use client";

import { useEffect } from "react";

export enum AlertType {
	INFO = "INFO",
	ERROR = "ERROR",
}

interface AlertModalProps {
	type: AlertType;
	message: string;
	onClose: () => void;
}

const typeStyles = {
	[AlertType.INFO]: {
		border: "border-neutral-500",
		text: "text-neutral-200",
		title: "Informacja",
	},
	[AlertType.ERROR]: {
		border: "border-red-500",
		text: "text-red-400",
		title: "Błąd",
	},
};

export default function AlertModal({
	type,
	message,
	onClose,
}: AlertModalProps) {
	const styles = typeStyles[type];

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className={`bg-black border ${styles.border} p-6 rounded-lg shadow-2xl max-w-md w-full font-mono text-white`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between mb-4">
					<h2 className={`font-bold text-lg ${styles.text}`}>
						{styles.title}
					</h2>
					<button
						onClick={onClose}
						className="aspect-square h-7 relative cursor-pointer"
					>
						<svg
							className="fill-neutral-500 hover:fill-white absolute inset-0 transition"
							viewBox="0 -0.5 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"></path>{" "}
							</g>
						</svg>
					</button>
				</div>

				<p className="text-neutral-200 whitespace-pre-wrap">
					{message}
				</p>

				<button
					onClick={onClose}
					className="mt-6 w-full bg-white text-black
                    font-semibold py-2 px-4 rounded
                    hover:bg-neutral-200 transition
                    cursor-pointer"
				>
					Zamknij
				</button>
			</div>
		</div>
	);
}
