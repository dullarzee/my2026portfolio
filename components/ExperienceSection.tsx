import React from "react";
import { Reveal } from "@/components/Reveal";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full border-t border-gray-300 dark:border-[#343537]/60 py-16 md:py-24">
      <div className="max-w-360 mx-auto px-5 md:px-12 lg:px-20 flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-2 max-w-3xl" delay={0.08}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">
              history_edu
            </span>
            <span>Track Record</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            Experience & Foundation.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Experience Column */}
          <Reveal className="lg:col-span-7 flex flex-col gap-6" delay={0.12}>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#caf300]">
                work_history
              </span>
              <span>Professional Experience</span>
            </h3>

            <div className="rounded-xl bg-[#1b1c1e] border border-[#444932]/40 p-6 sm:p-8 flex flex-col gap-4 hover:border-[#caf300]/60 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292a2c]/60 pb-4">
                <div>
                  <h4 className="font-['Syne'] text-xl sm:text-2xl text-white font-bold">
                    Space Villa Africa
                  </h4>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#caf300] font-medium">
                    Full-Stack / Front-End Engineering Intern
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] bg-[#1f2022] px-2.5 py-1 rounded w-fit border border-[#444932]/30">
                  July 2025 – February 2026
                </span>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                Spearheaded front-end features and full-stack modules for
                hospitality and affiliate ecosystems across Africa.
              </p>

              <ul className="flex flex-col gap-3 text-[#c5c9ac] font-['Plus_Jakarta_Sans'] text-[13px]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#caf300] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    Engineered modular affiliate dashboard features,
                    streamlining multi-tier referral tracking and automated
                    payout notifications.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#caf300] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    Designed and executed Playwright end-to-end automated
                    testing suites across vital booking workflows, drastically
                    reducing regressions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#caf300] text-[18px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    Refactored core state stores and database query pipelines,
                    boosting page response velocity by ~35%.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Education Column */}
          <Reveal className="lg:col-span-5 flex flex-col gap-6" delay={0.18}>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#caf300]">
                school
              </span>
              <span>Education</span>
            </h3>

            <div className="rounded-xl bg-[#1b1c1e] border border-[#444932]/40 p-6 sm:p-8 flex flex-col gap-4 hover:border-[#caf300]/60 transition-all">
              <div className="flex flex-col gap-1 border-b border-[#292a2c]/60 pb-4">
                <h4 className="font-['Syne'] text-xl sm:text-2xl text-white font-bold">
                  University of Lagos (UNILAG)
                </h4>
                <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#caf300] font-medium">
                  Lagos, Nigeria
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] mt-1">
                  Undergraduate Bachelor's Degree
                </span>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                Rigorous foundational studies combining analytical problem
                solving, systems theory, and mathematical modeling, translating
                directly into clean software engineering.
              </p>

              <div className="p-3 rounded dark:bg-[#1f2022]/60 border border-[#444932]/30 flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-white">
                <span className="material-symbols-outlined text-[#caf300] text-[18px]">
                  verified
                </span>
                <span>Accredited Academic Foundation</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
