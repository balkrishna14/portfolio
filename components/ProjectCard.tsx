"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import { PulseBoardPreview } from "./PulseBoardPreview";
import { DocRevPreview } from "./DocRevPreview";
import { GithubIcon } from "./icons";
import {
  CheckCircle2,
  ArrowUpRight,
  Info,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPulseBoard = project.id === "pulseboard";
  const isDocRev = project.id === "docrev";

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Project Details */}
        <div className="lg:col-span-6 space-y-5">
          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2">
            {project.badge && (
              <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                {project.badge}
              </span>
            )}
            <span className="px-2.5 py-0.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-emerald-600 dark:text-emerald-400">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800"
              >
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{m.label}</div>
                <div className="text-sm sm:text-base font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {m.value}
                </div>
                {m.subtext && (
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">{m.subtext}</div>
                )}
              </div>
            ))}
          </div>

          {/* Key Resume-Verified Highlights */}
          <div className="space-y-2 pt-1">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
              Key Engineering Features
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {project.highlights.slice(0, 4).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
              Project Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.liveUrl && project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Interactive Live Preview Included</span>
              </div>
            )}

            {project.githubUrl && project.githubUrl !== "#" ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repo Confidential</span>
              </span>
            )}
          </div>

          {/* Architecture Disclaimers */}
          {project.architectureNote && (
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 dark:text-zinc-400 font-mono pt-1">
              <Info className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              <span>{project.architectureNote}</span>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Simulation Preview */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2 flex items-center justify-between">
            <span>Interactive Product UI Preview</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400">Live Mock Engine</span>
          </div>

          {isPulseBoard && <PulseBoardPreview />}
          {isDocRev && <DocRevPreview />}
        </div>
      </div>
    </div>
  );
}
