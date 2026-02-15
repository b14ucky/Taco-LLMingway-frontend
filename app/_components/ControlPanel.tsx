"use client";

import { useState } from "react";

export default function ControlPanel() {
	const [tokens, setTokens] = useState(256);
	const [temperature, setTemperature] = useState(0.7);

	const getTemperatureLabel = (value: number) => {
		if (value <= 0.5) return "chłodny racjonalista";
		if (value <= 1.1) return "klasyczny storytelling";
		return "nocne życie Warszawy";
	};

	return (
		<div className="flex flex-col gap-8 h-full w-3/4 mt-4">
			<div className="flex flex-col gap-3">
				<h3 className="font-light">Liczba tokenów (liter)</h3>

				<input
					type="range"
					min={50}
					max={2048}
					step={1}
					value={tokens}
					onChange={(e) => setTokens(Number(e.target.value))}
					className="custom-slider"
					style={{
						background: `linear-gradient(to right, #10b981 0%, #10b981 ${
							((tokens - 50) / (2048 - 50)) * 100
						}%, #333 ${((tokens - 50) / (2048 - 50)) * 100}%, #333 100%)`,
					}}
				/>

				<input
					type="number"
					min={50}
					max={2048}
					value={tokens}
					onChange={(e) => setTokens(Number(e.target.value))}
					className="
                    bg-neutral-900 text-white p-2
                    rounded-md outline-none w-24"
				/>
			</div>

			<div className="flex flex-col gap-4">
				<h3 className="text-light">Temperatura</h3>

				<input
					type="range"
					min={0.01}
					max={1.7}
					step={0.01}
					value={temperature}
					onChange={(e) => setTemperature(Number(e.target.value))}
					className="custom-slider"
					style={{
						background: `linear-gradient(to right, #10b981 0%, #10b981 ${
							(temperature / 1.7) * 100
						}%, #333 ${(temperature / 1.7) * 100}%, #333 100%)`,
					}}
				/>

				<div className="text-sm text-neutral-400">
					{temperature.toFixed(2)} –{" "}
					<span className="text-white">
						{getTemperatureLabel(temperature)}
					</span>
				</div>
			</div>

			<button
				className="
					mt-auto
					bg-white
					text-black
					rounded-xl
					p-3
					font-semibold
					hover:bg-neutral-300
					active:scale-95
					transition
                    cursor-pointer
				"
				onClick={() =>
					console.log({
						tokens,
						temperature,
					})
				}
			>
				Generuj track
			</button>
		</div>
	);
}
