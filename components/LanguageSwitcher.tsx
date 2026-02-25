"use client";

import { useRouter, usePathname, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = (newLocale: string) => {
    Cookies.set("lang", newLocale, { path: "/", expires: 365 });
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center border border-neutral-800 rounded-md overflow-hidden bg-neutral-950 p-0.5 h-fit shadow-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => toggleLocale(loc)}
          className={`
						px-2.5 py-1 text-[10px] font-mono uppercase transition-all duration-200
						${
              currentLocale === loc
                ? "bg-white text-black font-bold shadow-sm"
                : "text-neutral-500 hover:text-neutral-200 cursor-pointer"
            }
						rounded-sm
					`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
