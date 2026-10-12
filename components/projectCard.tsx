"use client";

import { ProjectItem } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProp {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  index?: number;
}

export default function ProjectCard({
  index,
  project,
  onSelectProject,
}: ProjectCardProp) {
  const router = useRouter();
  const isEven = index ?? 2 % 2 === 0; //if index is undefined, find the modulus of two so every one is the same order style
  return (
    <div className="rounded-xl bg-[#1b1c1e] border border-[#444932]/50 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-[#caf300]/60 transition-all group">
      {/*mobile pic */}
      <div className="lg:col-span-6 rounded-lg flex items-center justify-center relative overflow-hidden flex flex-col gap-3 h-full block lg:hidden">
        <Image
          alt={`${project.title} image`}
          src={project.mainImage}
          width={500}
          height={350}
          className="w-full lg:h-[70%]"
        />
      </div>
      <div
        className={`lg:col-span-6 flex flex-col gap-4 ${!isEven && "lg:order-1"}`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 rounded bg-[#caf300] text-[#2a3400] font-['JetBrains_Mono'] text-[11px] font-bold uppercase">
            {project.category}
          </span>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] bg-[#1f2022] px-2.5 py-1 rounded border border-[#444932]/40">
            Active Showcase
          </span>
        </div>
        <h3 className="font-['Syne'] text-2xl sm:text-3xl md:text-4xl text-white font-bold group-hover:text-[#caf300] transition-colors">
          {project.title}
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c5c9ac] leading-relaxed">
          {project.description}
        </p>

        {/* Highlights Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
          {project.highlights.map((h) => (
            <div
              key={h.text}
              className="flex items-start gap-2 p-2 rounded bg-[#1f2022]/60 border border-[#444932]/20"
            >
              <span className="material-symbols-outlined text-[#caf300] text-[18px] shrink-0">
                {h.icon}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#e3e2e5]">
                {h.text}
              </span>
            </div>
          ))}
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-['JetBrains_Mono'] text-[11px] px-2 py-1 rounded bg-[#292a2c] text-[#c5c9ac]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 pt-4 flex-wrap">
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[13px] font-semibold hover:bg-[#b0d500] transition-colors cursor-pointer"
          >
            <span>Explore Architecture</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </button>
          <button
            onClick={() => window.open(project.siteUrl, "_blank")}
            className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-[13px] text-[#c5c9ac] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span>Go to live-site</span>
          </button>
        </div>
      </div>

      {/* Right Side: Graphic UI Simulation of Ride Dispatch */}
      <div className="lg:col-span-6 rounded-lg flex items-center justify-center relative overflow-hidden flex-col gap-3 h-full hidden lg:flex">
        <Image
          alt={`${project.title} image`}
          src={project.mainImage}
          width={500}
          height={350}
          className="w-full lg:h-[70%]"
        />
      </div>
    </div>
  );
}
