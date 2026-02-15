"use client";

import { useLayoutEffect, useRef } from "react";

export default function InputArea() {
	const editorRef = useRef<HTMLDivElement>(null);
	const caretRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number | null>(null);

	const updateCaret = () => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);

		rafRef.current = requestAnimationFrame(() => {
			const selection = window.getSelection();
			if (!selection || !selection.rangeCount) return;
			if (!editorRef.current?.contains(selection.anchorNode)) return;

			let range = selection.getRangeAt(0).cloneRange();
			range.collapse(true);

			let rect = range.getBoundingClientRect();
			let tempSpan: HTMLSpanElement | null = null;

			if (rect.top === 0 && rect.left === 0) {
				tempSpan = document.createElement("span");
				tempSpan.style.display = "inline-block";
				tempSpan.style.width = "1px";
				tempSpan.style.height = "21px";
				range.insertNode(tempSpan);

				rect = tempSpan.getBoundingClientRect();
				tempSpan.remove();
			}

			const editorRect = editorRef.current.getBoundingClientRect();
			if (!caretRef.current) return;

			caretRef.current.style.top =
				rect.top - editorRect.top + editorRef.current.scrollTop + "px";
			caretRef.current.style.left =
				rect.left -
				editorRect.left +
				editorRef.current.scrollLeft +
				"px";
			caretRef.current.style.height = rect.height + "px";
			console.log(rect.height);
		});
	};

	useLayoutEffect(() => {
		const editor = editorRef.current;
		if (!editor) return;

		const handleFocus = () => {
			if (!caretRef.current) return;
			caretRef.current.style.opacity = "1";
			caretRef.current.classList.add("caret-blinking");
			updateCaret();
		};

		const handleBlur = () => {
			if (!caretRef.current) return;
			caretRef.current.style.opacity = "0";
			caretRef.current.classList.remove("caret-blinking");
		};

		const handleEnter = (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				e.preventDefault();
				const selection = window.getSelection();
				if (!selection || !selection.rangeCount || !editorRef.current)
					return;

				const range = selection.getRangeAt(0);

				const newDiv = document.createElement("div");
				newDiv.appendChild(document.createElement("br"));

				let currentNode = selection.anchorNode;
				while (
					currentNode &&
					currentNode.parentNode !== editorRef.current
				) {
					currentNode = currentNode.parentNode;
				}

				if (currentNode?.parentNode) {
					currentNode.parentNode.insertBefore(
						newDiv,
						currentNode.nextSibling,
					);
				} else {
					editorRef.current.appendChild(newDiv);
				}

				const newRange = document.createRange();
				newRange.setStart(newDiv, 0);
				newRange.collapse(true);

				selection.removeAllRanges();
				selection.addRange(newRange);

				updateCaret();
			}
		};

		document.addEventListener("selectionchange", updateCaret);
		editor.addEventListener("focus", handleFocus);
		editor.addEventListener("blur", handleBlur);
		editor.addEventListener("scroll", updateCaret);
		editor.addEventListener("keydown", handleEnter);

		return () => {
			document.removeEventListener("selectionchange", updateCaret);
			editor.removeEventListener("focus", handleFocus);
			editor.removeEventListener("blur", handleBlur);
			editor.removeEventListener("scroll", updateCaret);
			editor.removeEventListener("keydown", handleEnter);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<div className="relative w-full h-full">
			<div
				ref={editorRef}
				contentEditable
				suppressContentEditableWarning
				className="
					w-full h-full
					bg-neutral-900 p-3 rounded-xl
					outline-none text-white
					overflow-auto
					flex flex-col
					whitespace-pre-wrap
					caret-transparent
				"
			/>

			<div
				ref={caretRef}
				className="
					absolute
					w-1.5
					bg-white
					pointer-events-none
					opacity-0
				"
			/>
		</div>
	);
}
