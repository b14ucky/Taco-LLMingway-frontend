import InfoCard from "./InfoCard";
import TempCard from "./TempCard";
import CodeBadge from "./CodeBadge";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const tDocs = useTranslations("Docs");
  const tTempCards = useTranslations("TempCards");

  return (
    <section className="w-11/12 md:max-w-4xl mx-auto mt-5 pt-16">
      <h2 className="text-2xl font-bold text-white mb-8 font-mono tracking-tight">
        {tDocs("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard title={tDocs("techTitle")} iconColor="bg-white">
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            {tDocs("techDesc1")}
            <span className="text-white">{tDocs("techDescSpan1")}</span>
            {tDocs("techDesc2")}
            <span className="text-white">{tDocs("techDescSpan2")}</span>
            {tDocs("techDesc3")}
          </p>
        </InfoCard>

        <InfoCard title={tDocs("feedingTitle")} iconColor="bg-blue-500">
          <p className="text-neutral-400 text-sm mb-4 font-mono">
            {tDocs("feedingDesc")}
          </p>
          <div className="space-y-2 font-mono text-xs">
            <CodeBadge>
              <span className="text-neutral-500">{tDocs("styleFree")}</span>
              <br />
              Wracam ekspresem do Warszawy...
            </CodeBadge>

            <CodeBadge>
              <span className="text-neutral-500">{tDocs("styleStruct")}</span>
              <br />
              {"<title>ZAKOCHAŁEM SIĘ POD APTEKĄ</title>"}
              <br />
              {"<verse>Był rok dwa tysiące dwunasty...</verse>"}
            </CodeBadge>
          </div>
        </InfoCard>

        <InfoCard
          title={tDocs("tempTitle")}
          iconColor="bg-orange-500"
          className="md:col-span-2"
        >
          <p className="text-neutral-400 text-sm mb-6 font-mono">
            {tDocs("tempDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <TempCard
              range="0.01 - 0.50"
              title={tTempCards("coolTitle")}
              description={tTempCards("coolDesc")}
              borderColor="border-blue-900/50"
              bgColor="bg-blue-900/10"
              textColor="text-blue-400"
            />
            <TempCard
              range="0.51 - 1.10"
              title={tTempCards("classicTitle")}
              description={tTempCards("classicDesc")}
              borderColor="border-green-900/50"
              bgColor="bg-green-900/10"
              textColor="text-green-400"
            />
            <TempCard
              range="1.11 - 1.70"
              title={tTempCards("warsawTitle")}
              description={tTempCards("warsawDesc")}
              borderColor="border-purple-900/50"
              bgColor="bg-purple-900/10"
              textColor="text-purple-400"
            />
          </div>
        </InfoCard>

        <InfoCard
          title={tDocs("tokensTitle")}
          iconColor="bg-neutral-500"
          className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <p className="text-neutral-400 text-sm font-mono max-w-xl">
              {tDocs("tokensDesc")}
              <span className="text-white ml-2">{tDocs("tokensFormula")}</span>.
            </p>
          </div>
          <CodeBadge className="whitespace-nowrap px-4 py-2 text-center">
            {tDocs("apiLimit")}
          </CodeBadge>
        </InfoCard>
      </div>
    </section>
  );
}
