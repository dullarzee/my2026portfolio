import React from "react";
import { Reveal } from "@/components/Reveal";

export const ApproachSection: React.FC = () => {
  const stages = [
    {
      num: "01",
      title: "Understand",
      desc: "Clarify the core business problem, end users, constraints, scope, and concrete success metrics prior to writing a line of code.",
    },
    {
      num: "02",
      title: "Plan & Design",
      desc: "Map out user flows, state contracts, database entities, and component hierarchies before starting technical implementation.",
    },
    {
      num: "03",
      title: "Build & Validate",
      desc: "Develop interfaces and backend systems in tandem. Author Playwright automated tests across mission-critical pathways.",
    },
    {
      num: "04",
      title: "Deliver & Improve",
      desc: "Prepare the product for seamless cloud deployment, review performance diagnostics, and map immediate next-generation enhancements.",
    },
  ];

  return (
    <section
      id="approach"
      className="w-full border-y border-gray-300 dark:border-[#343537]/60 py-16 md:py-24"
    >
      <div className="max-w-360 mx-auto px-5 md:px-12 lg:px-20 flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-2 max-w-3xl" delay={0.08}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">
              account_tree
            </span>
            <span>Methodology</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            Good software is built with intention.
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c5c9ac] leading-relaxed">
            A disciplined, step-by-step engineering practice that minimizes
            ambiguity and delivers software ready for high-concurrency
            production.
          </p>
        </Reveal>

        {/* 4-Stage Studio Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stages.map((stage, idx) => (
            <Reveal
              key={stage.num}
              className="p-6 rounded-lg bg-[#1b1c1e] border border-[#444932]/40 flex flex-col gap-4 relative overflow-hidden hover:border-[#caf300]/80 transition-all group"
              delay={idx * 0.08}
            >
              {/* Giant background stage number */}
              <span className="font-['Syne'] text-5xl md:text-6xl text-[#343537]/60 font-extrabold absolute top-2 right-4 pointer-events-none group-hover:text-[#caf300]/20 transition-colors">
                {stage.num}
              </span>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#caf300]"></span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-white uppercase font-bold tracking-wider">
                  STAGE {stage.num}
                </span>
              </div>

              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white group-hover:text-[#caf300] transition-colors">
                {stage.title}
              </h3>

              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                {stage.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
