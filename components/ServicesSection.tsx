import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Reveal } from '@/components/Reveal';

interface ServicesSectionProps {
  onInquireService: (serviceType: string, serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  return (
    <section
      id="services"
      className="w-full bg-[#0d0e10]/60 border-t border-[#343537]/60 py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 flex flex-col gap-16">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-2 max-w-3xl" delay={0.08}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">design_services</span>
            <span>Studio Offerings · Devzee Solutions</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            From first idea to working product.
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-[18px] text-[#c5c9ac] leading-relaxed">
            Devzee Solutions helps turn business needs into useful, well-crafted digital products — combining thoughtful interfaces with dependable engineering.
          </p>
        </Reveal>

        {/* 6-Card Service Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.id} className="rounded-lg bg-[#1b1c1e] border border-[#444932]/40 p-6 flex flex-col justify-between hover:border-[#caf300]/80 transition-all group" delay={idx * 0.08}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-[#1f2022] flex items-center justify-center text-[#caf300] group-hover:bg-[#caf300] group-hover:text-[#2a3400] transition-colors">
                  <span className="material-symbols-outlined text-[24px]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-['Syne'] text-xl sm:text-2xl text-white font-bold">
                  {service.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#292a2c]/60 flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                  {service.tags}
                </span>
                <button
                  onClick={() => onInquireService(service.typeValue, service.title)}
                  className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
