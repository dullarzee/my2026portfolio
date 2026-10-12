import React, { useState } from "react";
import { CODE_SNIPPETS, PROFILE_IMAGE } from "../data/portfolioData";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onStartProject,
  onOpenAudit,
}) => {
  const [selectedSnippetIdx, setSelectedSnippetIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const currentSnippet = CODE_SNIPPETS[selectedSnippetIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full px-5 md:px-12 lg:px-20 pt-12 pb-24 overflow-hidden">
      {/* Ambient subtle chartreuse glow blooms */}
      <div className="absolute -top-32 right-1/4 w-[540px] h-[540px] bg-[#caf300]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-[#292a2c]/40 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        {/* Left Column: Editorial Headline & Identity */}
        <Reveal className="lg:col-span-7 flex flex-col gap-4" delay={0.08}>
          {/* Eyebrow Pill */}
          <motion.div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1b1c1e] border border-[#444932]/50">
              <span className="w-2 h-2 rounded-full bg-[#caf300] shadow-[0_0_8px_#caf300] animate-pulse"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-white uppercase font-semibold">
                INDEPENDENT DEVELOPER · DEVZEE SOLUTIONS
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1b1c1e]/70 border border-[#444932]/30 text-[#c5c9ac] font-['JetBrains_Mono'] text-[11px]">
              <span className="material-symbols-outlined text-[14px] text-[#caf300]">
                near_me
              </span>
              <span>Lagos, NG · Global Availability</span>
            </div>
          </motion.div>

          {/*my profile pic*/}
          <div className="lg:hidden lg:col-span-5 relative">
            <div className="rounded-xl bg-[#1b1c1e] border border-[#444932]/60 p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden shadow-2xl">
              {/* Developer Studio Portrait */}
              <div className="aspect-square w-full rounded-lg bg-[#343537] relative overflow-hidden flex items-center justify-center">
                <Image
                  alt="Dullarzee / Devzee Solutions"
                  className="w-full h-full object-cover object-center lg:grayscale lg:hover:grayscale-0 transition-all duration-500"
                  src={PROFILE_IMAGE.src}
                  width={PROFILE_IMAGE.width}
                  height={PROFILE_IMAGE.height}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#121315]/90 backdrop-blur-md px-3 py-1 rounded border border-[#444932]/50 font-['JetBrains_Mono'] text-[11px] text-[#caf300] font-semibold">
                  TIMI // PRINCIPAL
                </div>
              </div>

              {/* Studio telemetry card */}
              <div className="flex items-center justify-between p-3 rounded bg-[#1f2022]/60 border border-[#444932]/30 font-['JetBrains_Mono'] text-[11px]">
                <span className="text-[#c5c9ac]">
                  LOC: LAGOS, NG · WAT (UTC+1)
                </span>
                <span className="text-[#caf300] font-bold">
                  STATUS: AVAILABLE
                </span>
              </div>
            </div>
          </div>

          {/* Master Headline */}
          <h1 className="font-['Syne'] text-4xl sm:text-5xl md:text-7xl lg:text-[80px] text-white font-extrabold tracking-tighter leading-[0.98] mt-2">
            Curious by nature.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e3e2e5] to-[#caf300]">
              Serious about software.
            </span>
          </h1>

          {/* Supporting Statement & Subline */}
          <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-[18px] text-[#e3e2e5] max-w-2xl leading-relaxed mt-2">
            I design and build thoughtful digital experiences — from polished
            web interfaces to full-stack systems that solve real problems.
          </p>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c5c9ac] max-w-xl leading-relaxed">
            Frontend-focused full-stack developer building for people,
            businesses, and ambitious ideas. Translating complex system
            requirements into fast, tactile, and resilient user interfaces.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[15px] font-bold hover:bg-[#b0d500] hover:shadow-[0_0_32px_rgba(202,243,0,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore My Work</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_downward
              </span>
            </button>
            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#1b1c1e] text-white border border-[#444932]/60 font-['Plus_Jakarta_Sans'] text-[15px] font-semibold hover:border-[#caf300]/80 hover:bg-[#1f2022] hover:text-[#caf300] transition-all cursor-pointer"
            >
              <span>Let's Build Something</span>
              <span className="material-symbols-outlined text-[18px]">
                terminal
              </span>
            </button>
          </div>

          {/* Technical Signature Strip */}
          <div className="pt-6 mt-4 border-t border-[#292a2c]/60 flex items-center flex-wrap gap-y-2 gap-x-4 text-[#c5c9ac] font-['JetBrains_Mono'] text-[13px]">
            <span className="text-white font-medium">Core Toolkit:</span>
            <span className="hover:text-white transition-colors">React</span>
            <span className="text-[#444932]">•</span>
            <span className="hover:text-white transition-colors">
              TypeScript
            </span>
            <span className="text-[#444932]">•</span>
            <span className="hover:text-white transition-colors">Next.js</span>
            <span className="text-[#444932]">•</span>
            <span className="hover:text-white transition-colors">Node.js</span>
            <span className="text-[#444932]">•</span>
            <span className="hover:text-white transition-colors">
              Tailwind CSS
            </span>
            <span className="text-[#444932]">•</span>
            <span className="text-[#caf300] font-medium">PostgreSQL</span>
          </div>
        </Reveal>

        {/* Right Column: Visual Telemetry Showcase */}
        {/* <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="relative rounded-xl bg-[#1b1c1e] border border-[#444932]/60 shadow-2xl p-4 sm:p-5 overflow-hidden">
            
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#292a2c]/80 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#464951] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#caf300]/90 inline-block"></span>
                <span className="ml-2 font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] tracking-wider truncate max-w-[150px] sm:max-w-none">
                  {currentSnippet.filename}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] bg-[#1f2022] px-2 py-0.5 rounded flex items-center gap-1 border border-[#444932]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#caf300] animate-ping"></span>
                  <span>{currentSnippet.envBadge}</span>
                </span>
                <button
                  onClick={handleCopy}
                  title="Copy Code"
                  className="p-1 rounded bg-[#1f2022] text-[#c5c9ac] hover:text-[#caf300] border border-[#444932]/40 transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
            </div>

            
            <div className="flex items-center gap-1 mb-2 overflow-x-auto pb-1 text-[11px] font-['JetBrains_Mono']">
              {CODE_SNIPPETS.map((snip, idx) => (
                <button
                  key={snip.filename}
                  onClick={() => setSelectedSnippetIdx(idx)}
                  className={`px-2 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    selectedSnippetIdx === idx
                      ? "bg-[#292a2c] text-[#caf300] font-semibold border border-[#444932]/60"
                      : "text-[#c5c9ac]/70 hover:text-white hover:bg-[#1f2022]"
                  }`}
                >
                  {snip.filename.split("/").pop()}
                </button>
              ))}
            </div>

            
            <pre className="font-['JetBrains_Mono'] text-[12px] sm:text-[13px] text-[#c5c9ac] leading-relaxed overflow-x-auto p-3 bg-[#0d0e10]/80 rounded border border-[#292a2c]/60 min-h-[180px]">
              <code>
                {currentSnippet.code.split("\n").map((line, idx) => {
                  const match = line.match(/^(\d+)\s+(.*)$/);
                  const lineNum = match
                    ? match[1]
                    : `${idx + 1}`.padStart(2, "0");
                  const codeContent = match ? match[2] : line;

                  return (
                    <div key={idx} className="table-row">
                      <span className="table-cell pr-3 text-[#8f9378]/70 select-none text-[11px]">
                        {lineNum}
                      </span>
                      <span className="table-cell text-left">
                        {codeContent.includes("export async function") ||
                        codeContent.includes("const ") ||
                        codeContent.includes("return ") ||
                        codeContent.includes("await ") ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: codeContent
                                .replace(
                                  /(export async function|const |return |await |function )/g,
                                  '<span class="text-[#caf300] font-semibold">$1</span>',
                                )
                                .replace(
                                  /('(.*?)')/g,
                                  '<span class="text-[#c4c6d0]">$1</span>',
                                )
                                .replace(
                                  /(\/\/.*$)/g,
                                  '<span class="text-[#8f9378] italic">$1</span>',
                                )
                                .replace(
                                  /(true|false)/g,
                                  '<span class="text-[#b0d500]">$1</span>',
                                ),
                            }}
                          />
                        ) : (
                          codeContent
                        )}
                      </span>
                    </div>
                  );
                })}
              </code>
            </pre>

            <p className="mt-2 text-[11px] font-['JetBrains_Mono'] text-[#c5c9ac]/80 italic">
              {currentSnippet.notes}
            </p>

            
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#292a2c]/60">
              <button
                onClick={onOpenAudit}
                className="p-2.5 rounded bg-[#1f2022]/70 border border-[#444932]/30 flex flex-col text-left hover:border-[#caf300]/60 transition-colors group cursor-pointer"
              >
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] group-hover:text-white flex items-center justify-between">
                  <span>LIGHTHOUSE</span>
                  <span className="material-symbols-outlined text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">
                    open_in_new
                  </span>
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#caf300]">
                    100
                  </span>
                  <span className="material-symbols-outlined text-[#caf300] text-[18px]">
                    verified
                  </span>
                </div>
              </button>

              <div className="p-2.5 rounded bg-[#1f2022]/70 border border-[#444932]/30 flex flex-col">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                  LCP_BENCH
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                    0.8s
                  </span>
                  <span className="material-symbols-outlined text-white text-[18px]">
                    bolt
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#1f2022]/70 border border-[#444932]/30 flex flex-col">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                  TEST_COV
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#caf300]">
                    98.4%
                  </span>
                  <span className="material-symbols-outlined text-[#caf300] text-[18px]">
                    check_circle
                  </span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="hidden sm:flex items-center gap-4 p-4 rounded-xl bg-[#292a2c]/90 backdrop-blur-xl border border-[#444932]/80 -mt-6 -ml-4 shadow-xl max-w-xs relative z-10">
            <div className="w-10 h-10 rounded-lg bg-[#caf300] text-[#2a3400] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                deployed_code
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-wider font-semibold">
                Production Certified
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[14px] text-white font-bold leading-tight">
                Resilient Web Architectures
              </span>
            </div>
          </div>
        </div> */}

        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="rounded-xl bg-[#1b1c1e] border border-[#444932]/60 p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden shadow-2xl">
            {/* Developer Studio Portrait */}
            <div className="aspect-square w-full rounded-lg bg-[#343537] relative overflow-hidden flex items-center justify-center">
              <Image
                alt="Dullarzee / Devzee Solutions"
                className="w-full h-full object-cover object-center lg:grayscale lg:hover:grayscale-0 transition-all duration-500"
                src={PROFILE_IMAGE.src}
                width={PROFILE_IMAGE.width}
                height={PROFILE_IMAGE.height}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#121315]/90 backdrop-blur-md px-3 py-1 rounded border border-[#444932]/50 font-['JetBrains_Mono'] text-[11px] text-[#caf300] font-semibold">
                TIMI // PRINCIPAL
              </div>
            </div>

            {/* Studio telemetry card */}
            <div className="flex items-center justify-between p-3 rounded bg-[#1f2022]/60 border border-[#444932]/30 font-['JetBrains_Mono'] text-[11px]">
              <span className="text-[#c5c9ac]">
                LOC: LAGOS, NG · WAT (UTC+1)
              </span>
              <span className="text-[#caf300] font-bold">
                STATUS: AVAILABLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
