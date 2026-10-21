import React, { useEffect, useState } from "react";
import { ProjectItem } from "../types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (type: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === project.images.length - 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-[#1b1c1e] border border-[#444932]/80 rounded-xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#292a2c] bg-[#121315]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-[#caf300] text-[#2a3400] font-['JetBrains_Mono'] text-[11px] font-bold uppercase">
              {project.category}
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300]">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded bg-[#1f2022] text-[#c5c9ac] hover:text-white hover:bg-[#292a2c] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl text-white font-bold">
              {project.title}
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#caf300] mt-1 font-medium">
              {project.tagline}
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#c5c9ac] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.disclaimer && (
            <div className="p-3 rounded bg-[#0d0e10] border border-[#ffb4ab]/40 text-[12px] text-[#ffb4ab] italic font-['Plus_Jakarta_Sans']">
              {project.disclaimer}
            </div>
          )}

          {project.images?.length > 0 && (
            <div className="flex flex-col gap-3 items-center">
              <div className="relative overflow-hidden lg:w-4/5 rounded-xl border border-[#292a2c] bg-[#0d0e10]">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} preview ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover"
                  />

                  {!isFirstImage && (
                    <button
                      type="button"
                      aria-label="Previous project image"
                      onClick={() =>
                        setCurrentImageIndex((prev) => Math.max(prev - 1, 0))
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition hover:bg-black/80"
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        chevron_left
                      </span>
                    </button>
                  )}

                  {!isLastImage && (
                    <button
                      type="button"
                      aria-label="Next project image"
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          Math.min(prev + 1, project.images.length - 1),
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition hover:bg-black/80"
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        chevron_right
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {project.images.length > 1 && (
                <div className="flex items-center justify-center gap-2">
                  {project.images.map((image, index) => (
                    <button
                      key={`${project.id}-${image}-${index}`}
                      type="button"
                      aria-label={`View project image ${index + 1}`}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "w-8 bg-[#caf300]"
                          : "w-2.5 bg-[#4a4d52] hover:bg-[#7a7d72]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-lg dark:bg-[#0d0e10] border border-[#292a2c]">
            {project.architectureDetails.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#c5c9ac] uppercase">
                  {m.label}
                </span>
                <span className="font-['Syne'] text-lg sm:text-xl font-bold text-white mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#121315] border border-[#444932]/30 flex flex-col gap-2">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#ffb4ab] uppercase font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  problem
                </span>
                Engineering Challenge
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                {project.architectureDetails.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#121315] border border-[#444932]/30 flex flex-col gap-2">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#caf300] uppercase font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                Architectural Resolution
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c5c9ac] leading-relaxed">
                {project.architectureDetails.solution}
              </p>
            </div>
          </div>

          {/* Key Decisions */}
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono'] text-[11px] text-white uppercase font-bold tracking-wider">
              Key Implementation Decisions:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#c5c9ac] font-['Plus_Jakarta_Sans']">
              {project.architectureDetails.keyDecisions.map((decision, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded dark:bg-[#1f2022]/60"
                >
                  <span className="text-[#caf300] font-['JetBrains_Mono'] text-[11px] font-bold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schema Code Snippet */}
          {project.architectureDetails.schemaSample && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[11px] text-white uppercase font-bold tracking-wider">
                  Schema & Data Model
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300]">
                  TYPE_SAFETY: STRICT
                </span>
              </div>
              <pre className="p-3.5 rounded bg-[#0d0e10] border border-[#292a2c] text-[12px] font-['JetBrains_Mono'] text-[#c5c9ac] overflow-x-auto leading-relaxed">
                <code>{project.architectureDetails.schemaSample}</code>
              </pre>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#292a2c]">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-['JetBrains_Mono'] text-[11px] px-2.5 py-1 rounded bg-[#1f2022] text-white border border-[#444932]/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#292a2c] bg-[#121315]">
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
            Devzee Solutions Technical Dossier
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-[#1f2022] text-[#c5c9ac] hover:text-white font-['Plus_Jakarta_Sans'] text-[13px] font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire("fullstack");
              }}
              className="px-4 py-2 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#b0d500] transition-colors cursor-pointer"
            >
              Build Similar System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
