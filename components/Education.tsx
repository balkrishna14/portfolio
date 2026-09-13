import React from "react";
import { educationData } from "@/data/education";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";

export function Education() {
  const btech = educationData.find((e) => e.featured);
  const secondarySchooling = educationData.filter((e) => !e.featured);

  return (
    <section id="education" className="py-12 sm:py-20 lg:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          subtitle="Chronological academic history and formal engineering degree credentials."
        />

        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Prominent B.Tech Card */}
          {btech && (
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                        {btech.institution}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Graduated
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {btech.degree} &mdash; {btech.field}
                    </p>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-mono text-xs font-bold self-start sm:self-auto shrink-0 shadow-2xs">
                  <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-500" />
                  <span>CGPA: {btech.score}</span>
                </div>
              </div>

              {/* Meta strip */}
              <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{btech.period}</span>
                </div>
                {btech.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{btech.location}</span>
                  </div>
                )}
              </div>

              {/* Coursework highlights */}
              {btech.highlights && (
                <div className="mt-3 sm:mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 space-y-1.5 sm:space-y-2">
                  {btech.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Compact Schooling Grid (Class XII & Class X) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {secondarySchooling.map((edu) => (
              <div
                key={edu.id}
                className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700">
                      {edu.scoreType === "CGPA" ? `CGPA: ${edu.score}` : `Score: ${edu.score}`}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.field && (
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                        {edu.field}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    {edu.period}
                  </span>
                  {edu.location && <span>{edu.location}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
