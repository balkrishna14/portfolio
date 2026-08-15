import React from "react";
import { SectionHeader } from "./SectionHeader";
import {
  Code,
  Layers,
  Users2,
  Cpu,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Lifecycle Software Development",
      description:
        "2+ years of professional experience taking features from design and architectural planning through implementation, testing, and production deployment.",
    },
    {
      icon: Layers,
      title: "Frontend & Full Stack Focus",
      description:
        "Specialized in modern frontend engineering with React, Next.js, and TypeScript, combined with solid backend API integration and database interactions.",
    },
    {
      icon: Cpu,
      title: "Production Reliability & Triage",
      description:
        "Proven track record diagnosing and resolving critical production bugs, optimizing enterprise queries, and ensuring high application availability.",
    },
    {
      icon: Users2,
      title: "Cross-Functional Collaboration",
      description:
        "Collaborated seamlessly with QA, product managers, database administrators, and engineering peers in fast-paced sprint cycles.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About BalKrishna"
          title="Engineering production-grade web systems"
          subtitle="A summary of professional software development capabilities, engineering practices, and production experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Software Developer</strong> with{" "}
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">2+ years of professional experience</strong> engineering,
              maintaining, and scaling production-grade web applications.
            </p>

            <p>
              My work spans across both frontend and backend development, with strong emphasis on building responsive,
              accessible, and high-performance user interfaces using <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400">React.js</span>,{" "}
              <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400">TypeScript</span>, and{" "}
              <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400">Next.js</span>.
            </p>

            <p>
              Currently at <strong className="text-zinc-900 dark:text-zinc-100">Tata Consultancy Services (TCS)</strong>, I contribute to the{" "}
              <strong className="text-zinc-900 dark:text-zinc-100">Tata Steel – Logistics Project</strong>, where I develop and maintain
              mission-critical systems supporting logistics and freight workflows across India, serving approximately{" "}
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">~10,000 active users</strong>.
            </p>

            <p>
              Throughout the software development lifecycle (SDLC), I actively collaborate with cross-functional teams,
              integrate RESTful APIs, interact with enterprise databases (Oracle, SQL Server), and resolve critical
              production issues to ensure seamless application uptime and business continuity.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
