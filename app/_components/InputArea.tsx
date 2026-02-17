"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";

export interface InputAreaHandle {
	getText: () => string;
	appendText: (text: string) => void;
}

const InputArea = forwardRef<InputAreaHandle>((_, ref) => {
	const editorRef = useRef<HTMLDivElement>(null);

	useImperativeHandle(ref, () => ({
		getText: () => {
			return editorRef.current?.innerText || "";
		},
		appendText: (text: string) => {
			if (!editorRef.current) return;
			editorRef.current.innerText += text;
			editorRef.current.scrollTop = editorRef.current.scrollHeight;

			const range = document.createRange();
			range.selectNodeContents(editorRef.current);
			range.collapse(false);
			const selection = window.getSelection();
			selection?.removeAllRanges();
			selection?.addRange(range);
		},
	}));

	return (
		<div className="relative w-full flex-1 min-h-0 p-2">
			<div
				ref={editorRef}
				contentEditable
				suppressContentEditableWarning
				className="
					w-full min-h-75
					md:h-full
					bg-neutral-950 p-4 rounded-xl
					border border-neutral-800
					outline-none text-white font-mono text-sm
					overflow-auto
					whitespace-pre-wrap
					caret-block
					caret-white
				"
			/>
		</div>
	);
});

InputArea.displayName = "InputArea";
export default InputArea;
