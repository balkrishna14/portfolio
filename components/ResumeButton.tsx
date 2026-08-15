"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Download, Check } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function ResumeButton({
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
}: ResumeButtonProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 },
        colors: ["#10b981", "#06b6d4", "#3b82f6", "#f59e0b"],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98]",
    secondary:
      "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-[0.98]",
    outline:
      "border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-[0.98]",
  };

  return (
    <a
      href={personalInfo.resumeUrl}
      download="BalKrishna-Pandey-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleDownload}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      aria-label="Download BalKrishna Pandey's Resume PDF"
    >
      {showIcon &&
        (downloaded ? (
          <Check className="w-4 h-4 text-emerald-500" />
        ) : (
          <Download className="w-4 h-4" />
        ))}
      <span>{downloaded ? "Resume Opened" : "Download Resume"}</span>
    </a>
  );
}
