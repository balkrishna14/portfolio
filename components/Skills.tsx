"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Sparkles,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Cpu,
  Sparkles,
  Wrench,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="py-12 sm:py-20 lg:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Technologies, engineering practices, and tools used to build modern production applications."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-3 sm:px-3.5 py-1.5 text-xs font-mono rounded-full transition-all border cursor-pointer min-h-[34px] flex items-center",
              selectedCategory === "all"
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
            )}
          >
            All Categories ({totalSkillsCount})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3 sm:px-3.5 py-1.5 text-xs font-mono rounded-full transition-all border cursor-pointer min-h-[34px] flex items-center",
                selectedCategory === cat.id
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              )}
            >
              {cat.name} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Layout;
            const unitLabel = category.unit || "Technologies";

            return (
              <div
                key={category.id}
                className="p-4 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {category.name}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-tight">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chip List */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/40 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                  <span>Technical Skills</span>
                  <span>
                    {category.skills.length} {unitLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
