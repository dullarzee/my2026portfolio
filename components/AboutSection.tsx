import React from "react";
import { PROFILE_IMAGE } from "../data/portfolioData";
import { Reveal } from "@/components/Reveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full px-5 md:px-12 lg:px-20 py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Portrait & Studio Card */}
        <Reveal className="lg:col-span-5 relative" delay={0.08}>
          <div className="rounded-xl bg-[#1b1c1e] border border-[#444932]/60 p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden shadow-2xl">
            {/* Developer Studio Portrait */}
            <div className="aspect-square w-full rounded-lg bg-[#343537] relative overflow-hidden flex items-center justify-center">
              <img
                alt="Dullarzee / Devzee Solutions"
                className="w-full h-full object-cover object-center lg:grayscale lg:hover:grayscale-0 transition-all duration-500"
                src={PROFILE_IMAGE.src}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#121315]/90 backdrop-blur-md px-3 py-1 rounded border border-[#444932]/50 font-['JetBrains_Mono'] text-[11px] text-[#caf300] font-semibold">
                DEVZEE // PRINCIPAL
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
        </Reveal>

        {/* Bio & Personality Pillars */}
        <Reveal className="lg:col-span-7 flex flex-col gap-4" delay={0.14}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">
              fingerprint
            </span>
            <span>Bio</span>
          </div>

          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            Always exploring. Always building.
          </h2>

          <div className="flex flex-col gap-4 text-[#c5c9ac] font-['Plus_Jakarta_Sans'] text-[15px] leading-relaxed">
            <p>
              Hi! <br />
              My name is Adefila oluwatimilehin samuel. I'm a frontend-focused
              full-stack developer who enjoys exploring how ideas become useful
              digital products. I love the craft of building interfaces, but I'm
              equally interested in what makes an application work beneath the
              surface — its data, architecture, workflows, and reliability.
            </p>
            <p>
              Curiosity keeps me experimenting. Passion keeps me building. An
              adventurous mindset pushes me to explore unfamiliar problems and
              find better ways to solve them.
            </p>
          </div>

          {/* 3 Pillars (Curious, Passionate, Adventurous) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Reveal
              className="p-4 rounded-lg bg-[#1b1c1e] border border-[#444932]/30 flex flex-col gap-1 hover:border-[#caf300]/60 transition-colors"
              delay={0.18}
            >
              <div className="flex items-center gap-2 text-[#caf300]">
                <span className="material-symbols-outlined text-[18px]">
                  psychology
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white">
                  Curious
                </span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] mt-1 leading-snug">
                Driven to understand systems from the browser rendering pipeline
                down to database queries.
              </p>
            </Reveal>

            <Reveal
              className="p-4 rounded-lg bg-[#1b1c1e] border border-[#444932]/30 flex flex-col gap-1 hover:border-[#caf300]/60 transition-colors"
              delay={0.24}
            >
              <div className="flex items-center gap-2 text-[#caf300]">
                <span className="material-symbols-outlined text-[18px]">
                  favorite
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white">
                  Passionate
                </span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] mt-1 leading-snug">
                Committed to meticulous craftsmanship, performance, and
                accessible user experiences.
              </p>
            </Reveal>

            <Reveal
              className="p-4 rounded-lg bg-[#1b1c1e] border border-[#444932]/30 flex flex-col gap-1 hover:border-[#caf300]/60 transition-colors"
              delay={0.3}
            >
              <div className="flex items-center gap-2 text-[#caf300]">
                <span className="material-symbols-outlined text-[18px]">
                  explore
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white">
                  Adventurous
                </span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] mt-1 leading-snug">
                Eager to test modern paradigms, novel APIs, and tackle tough
                engineering architectures.
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
