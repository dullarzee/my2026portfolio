import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDark ? "light" : "dark");
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
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:bg-[#121315]/95 dark:border-[#343537]/80"
          : "bg-white/70 backdrop-blur-xl border-b border-slate-200/80 dark:bg-[#121315]/85 dark:border-[#343537]/60"
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
                <span className="font-['Syne'] text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#caf300] transition-colors dark:text-white">
                  {`<TIMI />`}
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] bg-[#eef2d1] px-1.5 py-0.5 rounded uppercase tracking-widest border border-[#d4e28e] dark:bg-[#1f2022] dark:border-[#444932]/40">
                  Studio
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-slate-600 uppercase tracking-widest dark:text-[#c5c9ac]">
                Devzee Solutions
              </span>
            </div>
          </a>

          {/* Availability Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 dark:bg-[#1b1c1e] dark:border-[#444932]/30 dark:text-[#c5c9ac]">
            <span className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse"></span>
            <span className="font-['JetBrains_Mono'] text-[11px]">
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
                    : "text-slate-600 hover:text-slate-900 dark:text-[#c5c9ac] dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Start a Project Action Button */}
          <button
            onClick={onStartProject}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#b0d500] hover:shadow-[0_0_24px_rgba(202,243,0,0.25)] transition-all cursor-pointer whitespace-nowrap"
            type="button"
          >
            Start a Project
          </button>

          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-800 transition-colors hover:border-[#caf300] hover:text-[#caf300] dark:border-[#444932]/40 dark:bg-[#1b1c1e] dark:text-[#e3e2e5]"
          >
            <span className="material-symbols-outlined text-[18px]">
              {mounted && isDark ? "light_mode" : "dark_mode"}
            </span>
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
        <div className="lg:hidden bg-white/90 border-b border-slate-200 px-5 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200 dark:bg-[#121315] dark:border-[#343537]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#292a2c]">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-wider">
              Navigation Menu
            </span>
            <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-slate-600 dark:text-[#c5c9ac]">
              <span className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse"></span>
              Currently available for engagements
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
                    ? "bg-[#eef3d3] text-[#2a3400] font-semibold border border-[#dfe9b7] dark:bg-[#1f2022] dark:text-[#caf300] dark:border-[#444932]/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-[#c5c9ac] dark:hover:text-white dark:hover:bg-[#1b1c1e]"
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
