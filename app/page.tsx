import Column from "./_components/Column";
import ControlPanel from "./_components/ControlPanel";
import Header from "./_components/Header";
import InputArea from "./_components/InputArea";

export default function Home() {
	return (
		<main className="font-mono flex h-screen flex-col bg-neutral-900 gap-2 p-1 overflow-hidden">
			<div className="flex-none h-1/12">
				<Header />
			</div>

			<div className="flex flex-1 gap-2 h-11/12">
				<Column flex={70}>
					<h3 className="text-lg font-light p-4">
						Wpisz początek wersów...
					</h3>
					<InputArea />
				</Column>
				<Column flex={30}>
					<ControlPanel />
				</Column>
			</div>
		</main>
	);
}
