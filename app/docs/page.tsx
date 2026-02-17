import Link from "next/link";
import HowItWorks from "./_components/HowItWorks";
import Header from "@/components/Header";

export default function DocumentationPage() {
	return (
		<main className="font-mono min-h-screen bg-black text-white">
			<Header text="Dokumentacja">
				<Link
					href="/"
					className="text-xs border border-neutral-700 hover:border-white px-2 py-2 rounded transition"
				>
					← Wróć do generatora
				</Link>
			</Header>

			<HowItWorks />

			<footer className="mt-20 mb-10 text-center text-neutral-600 text-xs">
				taco-llmingway v1.0.0
			</footer>
		</main>
	);
}
