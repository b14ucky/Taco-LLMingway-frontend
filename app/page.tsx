"use client";

import { useRef, useState } from "react";
import Column from "./_components/Column";
import ControlPanel from "./_components/ControlPanel";
import Header from "./_components/Header";
import InputArea, { InputAreaHandle } from "./_components/InputArea";

export default function Home() {
	const inputAreaRef = useRef<InputAreaHandle>(null);
	const [isGenerating, setIsGenerating] = useState(false);

	const handleGenerate = async (tokens: number, temperature: number) => {
		if (!inputAreaRef.current) return;

		const currentPrompt = inputAreaRef.current.getText();

		if (!currentPrompt.trim()) {
			alert("Wpisz jakiś tekst początkowy!");
			return;
		}

		setIsGenerating(true);

		try {
			const response = await fetch("/api/stream", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					starting_text: currentPrompt,
					n_iters: tokens,
					temperature: temperature,
				}),
			});

			if (!response.body) throw new Error("No response body");

			if (!response.ok)
				throw new Error(`${response.status}: ${response.statusText}`);

			const reader = response.body.getReader();
			const decoder = new TextDecoder();

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				const textChunk = decoder.decode(value, { stream: true });

				inputAreaRef.current.appendText(textChunk);
			}
		} catch (error) {
			console.error(
				"An error occured whilst generating response:",
				error,
			);
			alert("Coś poszło nie tak z generowaniem.");
		} finally {
			setIsGenerating(false);
		}
	};

	return (
		<main className="font-mono flex min-h-screen md:h-screen flex-col bg-neutral-900 gap-2 p-1 overflow-y-auto md:overflow-hidden">
			<div className="flex-none">
				<Header />
			</div>

			<div className="flex flex-col md:flex-row flex-1 gap-2 min-h-0">
				<Column className="md:basis-[70%]">
					<h3 className="text-lg font-light p-4 text-white">
						Wpisz początek wersów...
					</h3>
					<InputArea ref={inputAreaRef} />
				</Column>

				<Column className="md:basis-[30%]">
					<ControlPanel
						onGenerate={handleGenerate}
						isGenerating={isGenerating}
					/>
				</Column>
			</div>
		</main>
	);
}
