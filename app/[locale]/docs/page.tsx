import { Link } from "@/i18n/routing";
import HowItWorks from "./_components/HowItWorks";
import Header from "@/components/Header";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function DocumentationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("Common");

  return (
    <main className="font-mono min-h-screen bg-black text-white">
      <Header text={t("documentation")}>
        <Link
          href="/"
          className="text-xs border border-neutral-700 hover:border-white px-2 py-2 rounded transition"
        >
          {t("back")}
        </Link>
      </Header>

      <HowItWorks />

      <footer className="mt-20 pb-10 text-center text-neutral-600 text-xs">
        taco-llmingway v2.0.0
      </footer>
    </main>
  );
}
