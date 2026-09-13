"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeader } from "./SectionHeader";
import { ResumeButton } from "./ResumeButton";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from "lucide-react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 lg:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeader
            badge="Get in Touch"
            title="Let's connect"
            subtitle="I am actively open to discussing software development, frontend engineering, and full stack opportunities."
          />

          <div className="p-4 sm:p-8 lg:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-xs space-y-5 sm:space-y-6">
            {/* Primary Contact Channels Grid (Email & Phone) */}
            <div className="space-y-3.5 sm:space-y-4">
              {/* Direct Email Action Box */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/80">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-base font-mono font-semibold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all cursor-pointer min-h-[38px]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}?subject=Software%20Developer%20Opportunity%20-%20BalKrishna%20Pandey`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs min-h-[38px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone Number Action Box */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/80">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Phone / Mobile
                    </div>
                    <a
                      href={personalInfo.phoneTel}
                      className="text-xs sm:text-base font-mono font-semibold text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all cursor-pointer min-h-[38px]"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>

                  <a
                    href={personalInfo.phoneTel}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-xs min-h-[38px]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Connect Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      balkrishnapandey4
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="p-2.5 rounded-lg bg-zinc-500/10 text-zinc-700 dark:text-zinc-300">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      GitHub
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      balkrishna14
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Quick Resume CTA Banner */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Looking for offline evaluation? Download a PDF copy of my verified resume.
              </div>
              <ResumeButton variant="primary" size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
