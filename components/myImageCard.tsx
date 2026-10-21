import { Reveal } from "./Reveal";
import { PROFILE_IMAGE } from "@/data/portfolioData";

export default function MyImageCard() {
  return (
    <Reveal className="lg:col-span-5 relative" delay={0.08}>
      <div className="rounded-xl bg-(--card) border border-(--line) p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        {/* Developer Studio Portrait */}
        <div className="aspect-square w-full rounded-lg bg-(--surface-strong) relative overflow-hidden flex items-center justify-center">
          <img
            alt="Dullarzee / Devzee Solutions"
            className="w-full h-full object-cover object-center lg:grayscale lg:hover:grayscale-0 transition-all duration-500"
            src={PROFILE_IMAGE.src}
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3 bg-[rgba(11,13,16,0.82)] text-[#caf300] backdrop-blur-md px-3 py-1 rounded border border-(--line) font-['JetBrains_Mono'] text-[11px] font-semibold dark:bg-[#121315]/90 dark:border-[#444932]/50">
            DEVZEE // PRINCIPAL
          </div>
        </div>

        {/* Studio telemetry card */}
        <div className="flex items-center justify-between p-3 rounded bg-(--surface-strong) border border-(--line) font-['JetBrains_Mono'] text-[11px]">
          <span className="text-(--muted)">LOC: LAGOS, NG · WAT (UTC+1)</span>
          <span className="text-[#caf300] font-bold">STATUS: AVAILABLE</span>
        </div>
      </div>
    </Reveal>
  );
}
