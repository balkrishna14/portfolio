"use client";

import React from "react";
import { personalInfo } from "@/data/personal";
import { ResumeButton } from "./ResumeButton";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  ArrowRight,
  Building2,
  Users,
  Code2,
  Mail,
} from "lucide-react";

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-indigo-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-6 backdrop-blur-xs shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">Software Developer</span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span className="text-zinc-500 dark:text-zinc-400">2+ Years Experience</span>
          </div>

          {/* Main Title & Role */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance leading-[1.1]">
            BalKrishna Pandey
          </h1>

          <p className="mt-3 text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tracking-tight">
            Software Developer building scalable, user-focused web applications.
          </p>

          {/* Supporting Bio */}
          <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl text-balance">
            {personalInfo.shortBio}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <ResumeButton variant="outline" size="md" />

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Contact Me</span>
            </a>

            <div className="h-6 w-[1px] bg-zinc-300 dark:bg-zinc-800 mx-1 hidden sm:block" />

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Credibility Key Highlights */}
          <div className="mt-12 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Current Company
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  TCS
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  Tata Steel Logistics
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Production Scale
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  ~10,000 Users
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  Across India operations
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Core Stack
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  React & Next.js
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  TypeScript, REST & SQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
