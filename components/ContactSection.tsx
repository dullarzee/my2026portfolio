import React, { useState, useEffect } from "react";
import { ProjectInquiry } from "../types";
import { Reveal } from "@/components/Reveal";

interface ContactSectionProps {
  preFillType?: string;
  preFillMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preFillType,
  preFillMessage,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "fullstack",
    budget: "5k-10k",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [inquiries, setInquiries] = useState<ProjectInquiry[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  useEffect(() => {
    if (preFillType) {
      setFormData((prev) => ({ ...prev, type: preFillType }));
    }
  }, [preFillType]);

  useEffect(() => {
    if (preFillMessage) {
      setFormData((prev) => ({ ...prev, message: preFillMessage }));
    }
  }, [preFillMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newInquiry: ProjectInquiry = {
      id: `inq-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      organization: formData.organization || "Independent Founder",
      type: formData.type,
      budget: formData.budget,
      message: formData.message,
      submittedAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setInquiries([newInquiry, ...inquiries]);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      organization: "",
      type: "fullstack",
      budget: "5k-10k",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="w-full px-5 md:px-12 lg:px-20 py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Context & Direct Contact Coordinates */}
        <Reveal className="lg:col-span-5 flex flex-col gap-4" delay={0.08}>
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">
              alternate_email
            </span>
            <span>Start an Engagement</span>
          </div>

          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            Have an idea worth building?
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-[18px] text-[#c5c9ac] leading-relaxed">
            Tell me what you're working on. Whether you need a website, a custom
            application, or help improving an existing product, let's explore
            what's possible.
          </p>

          {/* Direct Channels */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="mailto:timilehin0303@gmail.com"
              className="p-3.5 rounded bg-[#1b1c1e] border border-[#444932]/40 flex items-center justify-between hover:border-[#caf300] group transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#caf300] text-[20px]">
                  mail
                </span>
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                    DIRECT DISPATCH
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] text-white group-hover:text-[#caf300] transition-colors">
                    Timilehin0303@gmail.com
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c5c9ac] text-[18px]">
                arrow_outward
              </span>
            </a>

            <a
              href="https://github.com/dullarzee"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded bg-[#1b1c1e] border border-[#444932]/40 flex items-center justify-between hover:border-[#caf300] group transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#caf300] text-[20px]">
                  terminal
                </span>
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] text-white group-hover:text-[#caf300] transition-colors">
                    github.com/dullarzee
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c5c9ac] text-[18px]">
                arrow_outward
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/oluwatimilehin-adefila-27592727a"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded bg-[#1b1c1e] border border-[#444932]/40 flex items-center justify-between hover:border-[#caf300] group transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#caf300] text-[20px]">
                  connect_without_contact
                </span>
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] text-white group-hover:text-[#caf300] transition-colors">
                    linkedin.com/
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c5c9ac] text-[18px]">
                arrow_outward
              </span>
            </a>
          </div>

          {/* Timezone & Current Availability Indicator */}
          <div className="p-4 rounded bg-[#0d0e10] border border-[#444932]/30 flex items-center gap-3 mt-2">
            <div className="w-3 h-3 rounded-full bg-[#caf300] shadow-[0_0_10px_#caf300] animate-pulse"></div>
            <div className="flex flex-col">
              <span className="font-['JetBrains_Mono'] text-[11px] text-white uppercase font-bold">
                CURRENT STATUS: READY FOR SPRINT
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac]">
                Response turnaround typically within 12 hours.
              </span>
            </div>
          </div>

          {/* Inquiry History trigger if any submitted */}
          {inquiries.length > 0 && (
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] hover:underline flex items-center gap-1 mt-2 cursor-pointer w-fit"
            >
              <span className="material-symbols-outlined text-[14px]">
                history
              </span>
              <span>
                {showHistory ? "Hide" : "View"} Submitted Briefs (
                {inquiries.length})
              </span>
            </button>
          )}

          {showHistory && inquiries.length > 0 && (
            <div className="p-3 rounded bg-[#1f2022] border border-[#444932]/50 flex flex-col gap-2 max-h-48 overflow-y-auto">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#c5c9ac] uppercase font-bold">
                Dispatched Briefs In This Session:
              </span>
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-2 rounded bg-[#0d0e10] text-[11px] font-['Plus_Jakarta_Sans']"
                >
                  <div className="flex justify-between font-['JetBrains_Mono'] text-[#caf300]">
                    <span>
                      {inq.name} ({inq.type})
                    </span>
                    <span>{inq.submittedAt}</span>
                  </div>
                  <p className="text-[#c5c9ac] line-clamp-1 mt-0.5">
                    {inq.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        {/* Right Column: Interactive Project Enquiry Form */}
        <Reveal className="lg:col-span-7" delay={0.14}>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-[#1b1c1e] border border-[#444932]/60 p-6 md:p-8 flex flex-col gap-4 shadow-2xl relative"
            id="project-enquiry-form"
          >
            <div className="border-b border-[#292a2c]/60 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-['Syne'] text-2xl text-white font-bold">
                  Project Enquiry Brief
                </h3>
                <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac]">
                  Fill in the initial parameters of your build requirements.
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300] bg-[#1f2022] px-2 py-1 rounded border border-[#444932]/40">
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e5] uppercase tracking-wider"
                  htmlFor="contact-name"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  placeholder="Ada Lovelace"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#1f2022] border border-[#444932]/60 text-white placeholder:text-[#8f9378]/60 font-['Plus_Jakarta_Sans'] text-[13px] focus:outline-none focus:border-[#caf300] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e5] uppercase tracking-wider"
                  htmlFor="contact-email"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder="ada@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#1f2022] border border-[#444932]/60 text-white placeholder:text-[#8f9378]/60 font-['Plus_Jakarta_Sans'] text-[13px] focus:outline-none focus:border-[#caf300] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e5] uppercase tracking-wider"
                  htmlFor="contact-org"
                >
                  Company / Org (Optional)
                </label>
                <input
                  id="contact-org"
                  name="organization"
                  type="text"
                  placeholder="Acme Studio, Inc."
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#1f2022] border border-[#444932]/60 text-white placeholder:text-[#8f9378]/60 font-['Plus_Jakarta_Sans'] text-[13px] focus:outline-none focus:border-[#caf300] transition-colors"
                />
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e5] uppercase tracking-wider"
                  htmlFor="contact-type"
                >
                  Engagement Type
                </label>
                <select
                  id="contact-type"
                  name="type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#1f2022] border border-[#444932]/60 text-white font-['Plus_Jakarta_Sans'] text-[13px] focus:outline-none focus:border-[#caf300] transition-colors cursor-pointer"
                >
                  <option value="fullstack">Full-Stack Application</option>
                  <option value="website">Marketing / Brand Website</option>
                  <option value="mobile">Cross-Platform Mobile App</option>
                  <option value="ecom">E-Commerce Architecture</option>
                  <option value="testing">
                    Playwright QA & Performance Audit
                  </option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            {/* Estimated Budget Selection */}
            <div className="flex flex-col gap-2">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e5] uppercase tracking-wider">
                Estimated Project Budget (USD)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { value: "$200-$1k", label: "$200 - $1k" },
                  { value: "$1k-5k", label: "$1k – $5k" },
                  { value: "5k-10k", label: "$5k – $10k" },
                  { value: "10k+", label: "$10k – $15k+" },
                  { value: "advisory", label: "Retainer / QA" },
                ].map((b) => (
                  <label key={b.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={b.value}
                      checked={formData.budget === b.value}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="sr-only"
                    />
                    <span
                      className={`block p-2 text-center rounded border font-['JetBrains_Mono'] text-[11px] transition-all ${
                        formData.budget === b.value
                          ? "border-[#caf300] bg-[#caf300]/10 text-white font-bold"
                          : "bg-[#1f2022] border-[#444932]/40 text-[#c5c9ac] hover:border-[#444932]"
                      }`}
                    >
                      {b.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e5] uppercase tracking-wider"
                htmlFor="contact-msg"
              >
                Project Scope & Target Timeline *
              </label>
              <textarea
                id="contact-msg"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about the goals, existing tech stack, and your key delivery targets..."
                className="w-full px-3.5 py-2.5 rounded bg-[#1f2022] border border-[#444932]/60 text-white placeholder:text-[#8f9378]/60 font-['Plus_Jakarta_Sans'] text-[13px] focus:outline-none focus:border-[#caf300] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-3.5 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[15px] font-bold hover:bg-[#b0d500] hover:shadow-[0_0_24px_rgba(202,243,0,0.3)] transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              <span>Send Project Enquiry</span>
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>

            {/* Feedback Toast */}
            {submitted && (
              <div className="p-3 rounded bg-[#292a2c] border border-[#caf300]/60 text-white flex items-center gap-2 font-['JetBrains_Mono'] text-[13px] animate-in fade-in duration-300">
                <span className="material-symbols-outlined text-[#caf300] text-[20px]">
                  check_circle
                </span>
                <span>
                  Thank you! Your brief has been dispatched. I'll be in touch
                  within 12 hours.
                </span>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};
