import InfoCard from "./InfoCard";
import TempCard from "./TempCard";
import CodeBadge from "./CodeBadge";

export default function HowItWorks() {
	return (
		<section className="w-11/12 md:max-w-4xl mx-auto mt-5 pt-16">
			<h2 className="text-2xl font-bold text-white mb-8 font-mono tracking-tight">
				Dokumentacja Modelu
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<InfoCard title="Technikalia" iconColor="bg-white">
					<p className="text-neutral-400 text-sm leading-relaxed font-mono">
						Model został przeszkolony metodą pre-trainingu na
						kompletnym zbiorze tekstów Taco Hemingwaya, pobranych z
						serwisu Genius. Jego jedynym zadaniem jest dokańczanie
						(autouzupełnianie) tekstów.
					</p>
				</InfoCard>

				<InfoCard title="Jak Karmić Model" iconColor="bg-blue-500">
					<p className="text-neutral-400 text-sm mb-4 font-mono">
						Możesz wpisać dowolny początek zdania lub użyć struktury
						z datasetu:
					</p>
					<div className="space-y-2 font-mono text-xs">
						<CodeBadge>
							<span className="text-neutral-500">
								// Styl dowolny
							</span>
							<br />
							Wracam ekspresem do Warszawy...
						</CodeBadge>

						<CodeBadge>
							<span className="text-neutral-500">
								// Styl strukturalny
							</span>
							<br />
							[ZAKOCHAŁEM SIĘ POD APTEKĄ]
							<br />
							[Zwrotka 1: Taco Hemingway]
							<br />
							Był rok dwa tysiące dwunasty...
						</CodeBadge>
					</div>
				</InfoCard>

				<InfoCard
					title="Temperatura (Kreatywność)"
					iconColor="bg-orange-500"
					className="md:col-span-2"
				>
					<p className="text-neutral-400 text-sm mb-6 font-mono">
						Parametr sterujący losowością modelu. Wybierz swój vibe:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
						<TempCard
							range="0.01 - 0.50"
							title="Chłodny Racjonalista"
							description="Spójny, logiczny, powtarzalny. Mało ryzykuje."
							borderColor="border-blue-900/50"
							bgColor="bg-blue-900/10"
							textColor="text-blue-400"
						/>
						<TempCard
							range="0.51 - 1.10"
							title="Klasyczny Storytelling"
							description="Złoty środek. Balans między rymem a sensem."
							borderColor="border-green-900/50"
							bgColor="bg-green-900/10"
							textColor="text-green-400"
						/>
						<TempCard
							range="1.11 - 1.70"
							title="Nocne Życie Warszawy"
							description="Chaos, abstrakcja, halucynacje i dziwne metafory."
							borderColor="border-purple-900/50"
							bgColor="bg-purple-900/10"
							textColor="text-purple-400"
						/>
					</div>
				</InfoCard>

				<InfoCard
					title="Liczba tokenów"
					iconColor="bg-neutral-500"
					className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-4"
				>
					<div>
						<p className="text-neutral-400 text-sm font-mono max-w-xl">
							Określa limit wygenerowanego tekstu. Dla
							uproszczenia przyjmijmy przelicznik:
							<span className="text-white ml-2">
								1 Token ≈ 1 Litera/Znak
							</span>
							.
						</p>
					</div>
					<CodeBadge className="whitespace-nowrap px-4 py-2 text-center">
						Limit API: 2048 tokenów
					</CodeBadge>
				</InfoCard>
			</div>
		</section>
	);
}
