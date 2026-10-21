"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { ServicesSection } from "@/components/ServicesSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { ApproachSection } from "@/components/ApproachSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { AuditModal } from "@/components/AuditModal";
import { ProjectItem } from "@/types";

export default function homePage() {
  const [activeSection, setActiveSection] = useState<string>("work");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [auditModalOpen, setAuditModalOpen] = useState<boolean>(false);
  const [preFillType, setPreFillType] = useState<string>("fullstack");
  const [preFillMessage, setPreFillMessage] = useState<string>("");

  // IntersectionObserver to dynamically highlight the current active navigation section
  useEffect(() => {
    const sectionIds = [
      "work",
      "services",
      "engineering",
      "approach",
      "about",
      "contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      // highlight the name input
      const nameInput = document.getElementById("contact-name");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  const scrollToWork = () => {
    const workEl = document.getElementById("work");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInquireService = (serviceType: string, serviceTitle: string) => {
    setPreFillType(serviceType);
    setPreFillMessage(
      `Hi Dullarzee, I would like to inquire about Devzee Solutions for "${serviceTitle}". Here are the requirements...`,
    );
    scrollToContact();
  };

  const handlePreFillEnquiry = (type: string, message: string) => {
    setPreFillType(type);
    setPreFillMessage(message);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] font-['Plus_Jakarta_Sans'] transition-colors duration-300 selection:bg-[#caf300] selection:text-[#596c00]">
      {/* Fixed Sticky Header */}
      <Header activeSection={activeSection} onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[var(--page-bg)]">
        {/* 01. HERO SECTION */}
        <HeroSection
          onExploreWork={scrollToWork}
          onStartProject={scrollToContact}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* 02. CREDIBILITY & CAPABILITIES STRIP */}
        <CredibilityStrip />

        {/* 03. SELECTED WORK SECTION */}
        <SelectedWork
          onSelectProject={(project) => setSelectedProject(project)}
          onPreFillEnquiry={handlePreFillEnquiry}
        />

        {/* 04. SERVICES SECTION (DEVZEE SOLUTIONS) */}
        <ServicesSection onInquireService={handleInquireService} />

        {/* 05. ENGINEERING CAPABILITIES & STACK */}
        <EngineeringSection />

        {/* 06. APPROACH & METHODOLOGY */}
        <ApproachSection />

        {/* 07. ABOUT ME SECTION */}
        <AboutSection />

        {/* 08. EXPERIENCE & EDUCATION */}
        <ExperienceSection />

        {/* 09. CONTACT & PROJECT ENQUIRIES */}
        <ContactSection
          preFillType={preFillType}
          preFillMessage={preFillMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Architectural Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(type) => {
          setPreFillType(type);
          scrollToContact();
        }}
      />

      {/* Lighthouse Diagnostic Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
