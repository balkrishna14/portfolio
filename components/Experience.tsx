import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work History"
          title="Professional Experience"
          subtitle="Enterprise software development supporting mission-critical nationwide logistics operations."
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              {/* Top Banner / Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {exp.role}
                    </span>
                    <span>•</span>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {exp.project}
                    </span>
                  </div>
                </div>

                {/* Period & Location Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Scale Highlight Banner */}
              <div className="my-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-semibold">
                      Production Footprint & Scale
                    </div>
                    <div className="text-sm text-zinc-700 dark:text-zinc-300">
                      Applications actively support logistics workflows across India
                    </div>
                  </div>
                </div>

                <div className="shrink-0 bg-white dark:bg-zinc-800/90 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 text-right shadow-2xs">
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">User Base</div>
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {exp.userScale}
                  </div>
                </div>
              </div>

              {/* Verified Achievements Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
                  Key Technical Responsibilities & Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mr-2 font-medium">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
