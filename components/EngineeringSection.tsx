import React, { useState } from 'react';
import { ENGINEERING_STACK } from '../data/portfolioData';
import { Reveal } from '@/components/Reveal';

export const EngineeringSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeItem = ENGINEERING_STACK.find((item) => item.id === activeCategory);

  return (
    <section
      id="engineering"
      className="w-full px-5 md:px-12 lg:px-20 py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-2 max-w-3xl" delay={0.08}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">memory</span>
            <span>Technical Architecture</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            The interface is only the beginning.
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-[18px] text-[#c5c9ac] leading-relaxed">
            I care about how software feels to use, how it behaves under the hood, and how easily it can evolve as requirements grow.
          </p>
        </Reveal>

        {/* Capabilities Grid (6 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ENGINEERING_STACK.map((item, idx) => {
            const isSelected = activeCategory === item.id;
            return (
              <Reveal
                key={item.id}
                delay={idx * 0.08}
                onClick={() => setActiveCategory(isSelected ? null : item.id)}
                className={`p-6 rounded-lg bg-[#1b1c1e] border transition-all cursor-pointer flex flex-col gap-4 group ${
                  isSelected
                    ? 'border-[#caf300] shadow-[0_0_24px_rgba(202,243,0,0.15)] ring-1 ring-[#caf300]'
                    : 'border-[#444932]/40 hover:border-[#caf300]/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] font-semibold tracking-wider">
                    {item.category}
                  </span>
                  <span className="material-symbols-outlined text-white text-[20px] group-hover:text-[#caf300] transition-colors">
                    {item.icon}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                    {item.description}
                  </span>
                </div>

                {isSelected && (
                  <div className="p-3 rounded bg-[#0d0e10] border border-[#444932]/50 text-[12px] font-['Plus_Jakarta_Sans'] text-[#e3e2e5] leading-relaxed animate-in fade-in duration-200">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300] block mb-1 font-bold uppercase">
                      Architecture Principles:
                    </span>
                    {item.deepDive}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#292a2c]/50">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-['JetBrains_Mono'] text-[13px] px-2.5 py-1 rounded bg-[#1f2022] text-white border border-[#444932]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
