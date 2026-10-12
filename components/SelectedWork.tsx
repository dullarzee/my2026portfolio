import React, { useState, useEffect } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ProjectItem } from "../types";
import ProjectCard from "./projectCard";
import { Reveal } from "@/components/Reveal";

interface SelectedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
  onPreFillEnquiry: (type: string, message: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  onPreFillEnquiry,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [visibleProjectsCount, setVisibleProjectsCount] = useState<number>(3);

  // Uber Clone Transit Simulator State
  const [isSimulatingRoute, setIsSimulatingRoute] = useState<boolean>(false);
  const [simProgress, setSimProgress] = useState<number>(0);
  const [routeEtaMin, setRouteEtaMin] = useState<number>(22);
  const [routeDistKm, setRouteDistKm] = useState<number>(14.2);

  // Teazy Tech CMS preview state
  const [activeTeazyCard, setActiveTeazyCard] = useState<"ai" | "stem">("ai");

  // Moniepoint dual portal state
  const [moniepointPortal, setMoniepointPortal] = useState<"biz" | "personal">(
    "biz",
  );
  const [transactions, setTransactions] = useState([
    {
      id: "tx-1",
      title: "Settlement Payout #892",
      channel: "Merchant POS Gateway",
      amount: "+$2,450.00",
      type: "credit",
      portal: "biz",
    },
    {
      id: "tx-2",
      title: "Virtual Corporate Card Provision",
      channel: "Authorized Entity",
      amount: "-$120.00",
      type: "debit",
      portal: "biz",
    },
    {
      id: "tx-3",
      title: "Instant Savings Interest Credited",
      channel: "High-Yield Vault",
      amount: "+$34.50",
      type: "credit",
      portal: "personal",
    },
    {
      id: "tx-4",
      title: "Airtime & Utilities Billpay",
      channel: "Direct Debit API",
      amount: "-$25.00",
      type: "debit",
      portal: "personal",
    },
  ]);

  // Handle route animation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulatingRoute) {
      timer = setInterval(() => {
        setSimProgress((prev) => {
          if (prev >= 100) {
            setIsSimulatingRoute(false);
            return 0;
          }
          const next = prev + 5;
          setRouteDistKm(Number((14.2 * (1 - next / 100)).toFixed(1)));
          setRouteEtaMin(Math.max(1, Math.round(22 * (1 - next / 100))));
          return next;
        });
      }, 350);
    }
    return () => clearInterval(timer);
  }, [isSimulatingRoute]);

  const handleAddTransaction = () => {
    const isCredit = Math.random() > 0.4;
    const amountVal = (Math.random() * 800 + 50).toFixed(2);
    const newTx = {
      id: `tx-${Date.now()}`,
      title:
        moniepointPortal === "biz"
          ? `Vendor Invoice Settlement #${Math.floor(Math.random() * 900 + 100)}`
          : `Card Payment Transfer #${Math.floor(Math.random() * 500 + 10)}`,
      channel:
        moniepointPortal === "biz"
          ? "Merchant Treasury Rail"
          : "Personal Wallet",
      amount: `${isCredit ? "+" : "-"}$${amountVal}`,
      type: isCredit ? "credit" : "debit",
      portal: moniepointPortal,
    };
    setTransactions([newTx, ...transactions.slice(0, 5)]);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "fullstack")
      return p.category.includes("Full-Stack");
    if (filterCategory === "education") return p.category.includes("Education");
    if (filterCategory === "fintech") return p.category.includes("Fintech");
    return true;
  });

  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);
  const hasMoreProjects = visibleProjectsCount < filteredProjects.length;

  useEffect(() => {
    setVisibleProjectsCount(3);
  }, [filterCategory]);

  const uberProject = PROJECTS.find((p) => p.id === "uber-clone")!;
  const teazyProject = PROJECTS.find((p) => p.id === "teazy-tech")!;
  const moniepointProject = PROJECTS.find((p) => p.id === "moniepoint-clone")!;

  return (
    <section id="work" className="w-full px-5 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <Reveal
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#292a2c]/60 pb-8"
          delay={0.08}
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">
                folder_special
              </span>
              <span>Selected Projects · 2024–{new Date().getFullYear()}</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
              Ideas made tangible.
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c5c9ac] mt-1 leading-relaxed">
              A selection of interfaces, systems, and digital products I've
              worked on — exploring how thoughtful design and solid engineering
              come together.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
              FILTER:
            </span>
            <div className="flex items-center gap-1 bg-[#1f2022] p-1 rounded border border-[#444932]/40">
              <button
                onClick={() => setFilterCategory("all")}
                className={`px-2.5 py-1 rounded font-['JetBrains_Mono'] text-[11px] transition-colors cursor-pointer ${
                  filterCategory === "all"
                    ? "bg-[#caf300] text-[#2a3400] font-bold"
                    : "text-[#c5c9ac] hover:text-white"
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setFilterCategory("fullstack")}
                className={`px-2.5 py-1 rounded font-['JetBrains_Mono'] text-[11px] transition-colors cursor-pointer ${
                  filterCategory === "fullstack"
                    ? "bg-[#caf300] text-[#2a3400] font-bold"
                    : "text-[#c5c9ac] hover:text-white"
                }`}
              >
                FULL-STACK
              </button>
              <button
                onClick={() => setFilterCategory("education")}
                className={`px-2.5 py-1 rounded font-['JetBrains_Mono'] text-[11px] transition-colors cursor-pointer ${
                  filterCategory === "education"
                    ? "bg-[#caf300] text-[#2a3400] font-bold"
                    : "text-[#c5c9ac] hover:text-white"
                }`}
              >
                MEDIA & EDTECH
              </button>
              <button
                onClick={() => setFilterCategory("fintech")}
                className={`px-2.5 py-1 rounded font-['JetBrains_Mono'] text-[11px] transition-colors cursor-pointer ${
                  filterCategory === "fintech"
                    ? "bg-[#caf300] text-[#2a3400] font-bold"
                    : "text-[#c5c9ac] hover:text-white"
                }`}
              >
                FINTECH
              </button>
            </div>
          </div>
        </Reveal>

        {visibleProjects.map((project, idx) => {
          return (
            <Reveal key={project.id} delay={idx * 0.08}>
              <ProjectCard
                project={project}
                onSelectProject={onSelectProject}
                index={idx}
              />
            </Reveal>
          );
        })}

        {hasMoreProjects && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleProjectsCount((prev) =>
                  Math.min(prev + 3, filteredProjects.length),
                )
              }
              className="inline-flex items-center justify-center rounded-full border border-[#caf300]/60 bg-[#101214] px-5 py-3 text-sm font-medium text-[#caf300] transition hover:border-[#caf300] hover:bg-[#caf300] hover:text-[#12170c]"
            >
              Show more
            </button>
          </div>
        )}

        {/* More Work GitHub Callout Banner */}
        <Reveal
          className="w-full rounded-xl bg-[#0d0e10] border border-[#444932]/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          delay={0.2}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-[#1f2022] flex items-center justify-center text-[#caf300] shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                code_blocks
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white">
                Explore More Work & Experimental Labs
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac]">
                Open-source libraries, micro-tools, and architecture
                proofs-of-concept hosted on GitHub.
              </span>
            </div>
          </div>
          <a
            href="https://github.com/dullarzee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded bg-[#292a2c] border border-[#444932]/60 text-white font-['JetBrains_Mono'] text-[13px] hover:border-[#caf300] hover:text-[#caf300] transition-all shrink-0"
          >
            <span>&gt; _github/dullarzee</span>
            <span className="material-symbols-outlined text-[16px]">
              open_in_new
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
