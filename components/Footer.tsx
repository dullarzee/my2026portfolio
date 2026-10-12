import React from "react";
import { Reveal } from "@/components/Reveal";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0d0e10] border-t border-[#343537]/60">
      <div className="w-full px-5 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand & Manifesto */}
          <Reveal className="md:col-span-5 flex flex-col gap-4" delay={0.08}>
            <div className="flex items-center gap-2">
              <span className="font-['Syne'] text-2xl tracking-tight text-white font-bold">
                Dullarzee
              </span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] bg-[#1f2022] px-2 py-0.5 rounded uppercase tracking-widest border border-[#444932]/40">
                Studio
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-[18px] text-[#e3e2e5] italic max-w-md">
              “Thoughtfully designed. Carefully engineered.”
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] max-w-sm leading-relaxed">
              High-performance digital products, full-stack systems
              architecture, and artisanal web experiences for forward-looking
              founders.
            </p>
          </Reveal>

          {/* Navigation Links */}
          <Reveal className="md:col-span-4 flex flex-col gap-2" delay={0.12}>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-2">
              <a
                href="#work"
                onClick={(e) => handleNavClick(e, "#work")}
                className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors"
              >
                Selected Works
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors"
              >
                Studio Services
              </a>
              <a
                href="#engineering"
                onClick={(e) => handleNavClick(e, "#engineering")}
                className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors"
              >
                Architecture
              </a>
              <a
                href="#approach"
                onClick={(e) => handleNavClick(e, "#approach")}
                className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors"
              >
                Methodology
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors"
              >
                Studio Bio
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors"
              >
                Initiate Brief
              </a>
            </div>
          </Reveal>

          {/* Telemetry & Networks */}
          <Reveal className="md:col-span-3 flex flex-col gap-2" delay={0.16}>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest font-semibold">
              Telemetry & Networks
            </span>
            <div className="flex flex-col gap-1 font-['JetBrains_Mono'] text-[13px] pt-2">
              <a
                href="https://github.com/dullarzee"
                target="_blank"
                rel="noreferrer"
                className="text-[#c5c9ac] hover:text-white transition-colors flex items-center justify-between py-1.5 border-b border-[#292a2c]/60 group"
              >
                <span>GitHub</span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] group-hover:text-[#caf300]">
                  &gt; _src
                </span>
              </a>
              <a
                href="https://linkedin.com/in/oluwatimilehin-adefila-27592727a"
                target="_blank"
                rel="noreferrer"
                className="text-[#c5c9ac] hover:text-white transition-colors flex items-center justify-between py-1.5 border-b border-[#292a2c]/60 group"
              >
                <span>LinkedIn</span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] group-hover:text-[#caf300]">
                  &gt; connect
                </span>
              </a>
              <a
                href="mailto:timilehin0303@gmail.com"
                className="text-[#c5c9ac] hover:text-white transition-colors flex items-center justify-between py-1.5 border-b border-[#292a2c]/60 group"
              >
                <span>Email</span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] group-hover:text-[#caf300]">
                  &gt; dispatch
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom copyright and Back to Top */}
        <Reveal className="pt-6 border-t border-[#292a2c]/50 flex flex-col sm:flex-row items-center justify-between gap-4" delay={0.2}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] flex-wrap justify-center sm:justify-start">
            <span>© 2026 Devzee Solutions</span>
            <span>•</span>
            <span>All rights reserved</span>
            <span>•</span>
            <span>Built with craft & speed</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#c5c9ac] hover:text-[#caf300] flex items-center gap-2 transition-colors group cursor-pointer"
          >
            <span className="group-hover:-translate-y-0.5 transition-transform">
              Back to top
            </span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_upward
            </span>
          </button>
        </Reveal>
      </div>
    </footer>
  );
};
