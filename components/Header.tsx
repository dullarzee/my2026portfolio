import React, { useState, useEffect } from "react";
import { PROFILE_IMAGE } from "../data/portfolioData";
import Image from "next/image";

interface HeaderProps {
  onStartProject: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onStartProject,
  activeSection,
}) => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Engineering", href: "#engineering", id: "engineering" },
    { label: "Approach", href: "#approach", id: "approach" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121315]/95 backdrop-blur-xl border-b border-[#343537]/80 shadow-lg"
          : "bg-[#121315]/85 backdrop-blur-xl border-b border-[#343537]/60"
      }`}
    >
      <div className="h-20 w-full px-5 md:px-12 lg:px-20 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-['Syne'] text-2xl font-bold tracking-tight text-white group-hover:text-[#caf300] transition-colors">
                  {`<TIMI />`}
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] bg-[#1f2022] px-1.5 py-0.5 rounded uppercase tracking-widest border border-[#444932]/40">
                  Studio
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] uppercase tracking-widest">
                Devzee Solutions
              </span>
            </div>
          </a>

          {/* Availability Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1c1e] border border-[#444932]/30">
            <span className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse"></span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
              Currently available for engagements
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-['Plus_Jakarta_Sans'] text-[13px] tracking-wide transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#caf300] font-semibold"
                    : "text-[#c5c9ac] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Color Mode Toggle */}
          <button
            aria-label="Toggle color mode"
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded flex items-center justify-center bg-[#1b1c1e] border border-[#444932]/40 text-[#c5c9ac] hover:text-[#caf300] hover:border-[#caf300]/40 transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Start a Project Action Button */}
          <button
            onClick={onStartProject}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#b0d500] hover:shadow-[0_0_24px_rgba(202,243,0,0.25)] transition-all cursor-pointer whitespace-nowrap"
            type="button"
          >
            Start a Project
          </button>

          {/* Profile Thumbnail with hotlink and fallback */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#444932]/60 shrink-0 /bg-[#292a2c]">
            <Image
              alt="Dullarzee / Devzee Solutions Profile"
              className="w-full h-full object-cover"
              src={PROFILE_IMAGE.src}
              width={PROFILE_IMAGE.width}
              height={PROFILE_IMAGE.height}
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback styling if image fails
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#caf300] pointer-events-none -z-10">
              DZ
            </div>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            aria-label="Open navigation drawer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded flex items-center justify-center bg-[#1b1c1e] border border-[#444932]/40 text-white hover:text-[#caf300] transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121315] border-b border-[#343537] px-5 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#292a2c]">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-wider">
              Navigation Menu
            </span>
            <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-[#c5c9ac]">
              <span className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse"></span>
              Available for Q2/Q3
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2.5 rounded font-['Plus_Jakarta_Sans'] text-sm tracking-wide transition-colors ${
                  activeSection === link.id
                    ? "bg-[#1f2022] text-[#caf300] font-semibold border border-[#444932]/60"
                    : "text-[#c5c9ac] hover:text-white hover:bg-[#1b1c1e]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#b0d500] transition-all"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
