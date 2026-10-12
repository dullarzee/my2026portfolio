import React from 'react';
import { Reveal } from '@/components/Reveal';

export const CredibilityStrip: React.FC = () => {
  const pillars = [
    {
      step: '01 / FRONTEND',
      title: 'Precision UI',
      desc: 'Design systems, micro-interactions, responsive architectures.',
    },
    {
      step: '02 / FULL-STACK',
      title: 'Type-Safe Systems',
      desc: 'End-to-end type safety, Next.js App Router, SSR & SSG workflows.',
    },
    {
      step: '03 / APIS & DATA',
      title: 'Relational Schemas',
      desc: 'RESTful design, PostgreSQL, Supabase, normalized entities.',
    },
    {
      step: '04 / MOBILE',
      title: 'Cross-Platform',
      desc: 'React Native & Expo native-feel flows across iOS & Android.',
    },
    {
      step: '05 / TESTING & CI',
      title: 'Playwright Suites',
      desc: 'Automated end-to-end suites, continuous regression safety.',
    },
  ];

  return (
    <section className="w-full bg-[#0d0e10] border-y border-[#343537]/60 py-6">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#292a2c]/50">
          {pillars.map((pillar, idx) => (
            <Reveal
              key={pillar.step}
              className={`flex flex-col gap-1 pt-3 md:pt-0 md:px-4 ${
                idx === 0 ? 'first:pl-0' : ''
              }`}
              delay={idx * 0.08}
            >
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] font-semibold tracking-wider">
                {pillar.step}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white">
                {pillar.title}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-snug">
                {pillar.desc}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
