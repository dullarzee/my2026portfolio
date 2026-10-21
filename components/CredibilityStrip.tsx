import React from "react";
import { Reveal } from "@/components/Reveal";

export const CredibilityStrip: React.FC = () => {
  const pillars = [
    {
      step: "01 / FRONTEND",
      title: "Precision UI",
      desc: "Design systems, micro-interactions, responsive architectures.",
    },
    {
      step: "02 / FULL-STACK",
      title: "Type-Safe Systems",
      desc: "End-to-end type safety, Next.js App Router, SSR & SSG workflows.",
    },
    {
      step: "03 / APIS & DATA",
      title: "Relational Schemas",
      desc: "RESTful design, PostgreSQL, Supabase, normalized entities.",
    },
    {
      step: "04 / MOBILE",
      title: "Cross-Platform",
      desc: "React Native & Expo native-feel flows across iOS & Android.",
    },
    {
      step: "05 / TESTING & CI",
      title: "Playwright Suites",
      desc: "Automated end-to-end suites, continuous regression safety.",
    },
  ];

  return (
    <section className="w-full border-y border-(--line) bg-(--page-bg-soft) py-6 transition-colors duration-300">
      <div className="mx-auto max-w-360 px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 divide-y divide-(--line) md:grid-cols-3 md:divide-x md:divide-y-0 lg:grid-cols-5 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <Reveal
              key={pillar.step}
              className={`flex flex-col gap-1 rounded-xl border border-(--line) bg-(--surface) p-3 transition-colors duration-300 md:p-4 md:pt-4`}
              delay={idx * 0.08}
            >
              <span className="font-['JetBrains_Mono'] text-[11px] font-semibold tracking-[0.12em] text-(--lime-strong)">
                {pillar.step}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-(--heading)">
                {pillar.title}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-snug text-(--muted)">
                {pillar.desc}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
