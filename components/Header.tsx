import { ReactNode } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  text: string;
  children: ReactNode;
}

export default function Header({ text, children }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b border-neutral-800 bg-black">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <h1 className="text-xl font-bold tracking-tighter text-white">
          {text.substring(0, 4)}
          <span className="text-neutral-500">{text.substring(4)}</span>
        </h1>
      </div>

      <div className="flex flex-col md:items-center md:flex-row items-end gap-2 text-center">
        {children}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
