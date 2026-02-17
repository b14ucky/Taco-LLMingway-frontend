"use client";

import { useState } from "react";

interface ControlPanelProps {
	onGenerate: (tokens: number, temperature: number) => void;
	isGenerating: boolean;
}

export default function ControlPanel({
	onGenerate,
	isGenerating,
}: ControlPanelProps) {
	const [tokens, setTokens] = useState(256);
	const [temperature, setTemperature] = useState(0.7);

	const getTemperatureLabel = (value: number) => {
		if (value <= 0.5) return "chłodny racjonalista";
		if (value <= 1.1) return "klasyczny storytelling";
		return "nocne życie Warszawy";
	};

	const accentColor = "#ffffff";
	const trackColor = "#333333";

	return (
		<div className="flex flex-col gap-8 h-full w-full p-2 mt-4 font-mono">
			<div className="flex flex-col gap-3">
				<label className="text-sm text-neutral-400">
					Liczba tokenów
				</label>
				<input
					type="range"
					min={50}
					max={2048}
					step={1}
					value={tokens}
					onChange={(e) => setTokens(Number(e.target.value))}
					className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
					disabled={isGenerating}
					style={{
						background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${
							((tokens - 50) / (2048 - 50)) * 100
						}%, ${trackColor} ${((tokens - 50) / (2048 - 50)) * 100}%, ${trackColor} 100%)`,
					}}
				/>
				<input
					type="number"
					min={50}
					max={2048}
					value={tokens}
					onChange={(e) => setTokens(Number(e.target.value))}
					className="bg-black text-white text-lg font-bold p-2 border
						border-neutral-700 rounded-md outline-none w-full
						number-input-dark
					"
				/>
			</div>

			<div className="border-t border-neutral-800 pt-6 flex flex-col gap-4">
				<label className="text-sm text-neutral-400">Temperatura</label>
				<input
					type="range"
					min={0.01}
					max={1.7}
					step={0.01}
					value={temperature}
					onChange={(e) => setTemperature(Number(e.target.value))}
					className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
					disabled={isGenerating}
					style={{
						background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${
							(temperature / 1.7) * 100
						}%, ${trackColor} ${(temperature / 1.7) * 100}%, ${trackColor} 100%)`,
					}}
				/>
				<div className="text-sm">
					<span className="text-white font-bold">
						{temperature.toFixed(2)}
					</span>
					<span className="text-neutral-500 ml-2">
						{getTemperatureLabel(temperature)}
					</span>
				</div>
			</div>

			<button
				disabled={isGenerating}
				className={`
					mt-auto
					bg-white text-black
					rounded-md p-3 font-semibold text-sm
					transition duration-150
					${isGenerating ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-200 active:scale-95 cursor-pointer"}
				`}
				onClick={() => onGenerate(tokens, temperature)}
			>
				{isGenerating ? "Generowanie..." : "Generuj track"}
			</button>
		</div>
	);
}
