"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  Star,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DocRevPreview() {
  const [selectedSlot, setSelectedSlot] = useState("10:30 AM");
  const [activeModule, setActiveModule] = useState<"discovery" | "reviews" | "booking">("discovery");

  const slots = ["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"];

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden font-sans shadow-lg">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 font-mono text-zinc-400 text-[11px] hidden sm:inline-block">
            docrev.in/specialists
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono">
            5+ Core Modules
          </span>
        </div>
      </div>

      {/* Module Selector */}
      <div className="flex items-center gap-1 px-3 sm:px-4 pt-2.5 bg-zinc-950 border-b border-zinc-800/80 overflow-x-auto text-xs no-scrollbar">
        <button
          onClick={() => setActiveModule("discovery")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap cursor-pointer",
            activeModule === "discovery"
              ? "text-cyan-400 border-cyan-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>AI Doctor Discovery</span>
        </button>

        <button
          onClick={() => setActiveModule("booking")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap cursor-pointer",
            activeModule === "booking"
              ? "text-cyan-400 border-cyan-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span>Appointment Booking</span>
        </button>

        <button
          onClick={() => setActiveModule("reviews")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap cursor-pointer",
            activeModule === "reviews"
              ? "text-cyan-400 border-cyan-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Star className="w-3.5 h-3.5 text-amber-400" />
          <span>Verified Reviews</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-3.5 sm:p-5">
        {activeModule === "discovery" && (
          <div className="space-y-3">
            {/* AI Match Banner */}
            <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs flex flex-wrap items-center justify-between gap-1.5">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium text-[11px] sm:text-xs">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                AI Recommendation: Cardiology Specialist
              </span>
              <span className="font-mono text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300">
                98% Match
              </span>
            </div>

            {/* Doctor Card */}
            <div className="p-3 sm:p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                    <Stethoscope className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs sm:text-sm font-semibold text-zinc-100 flex items-center gap-1.5 truncate">
                      Dr. Sarah Jenkins, MD
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </h5>
                    <p className="text-[11px] sm:text-xs text-zinc-400 truncate">Cardiology & Internal Medicine • 12 Yrs</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                  <span className="text-zinc-500 text-[10px]">(128)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Heart Arrhythmia</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Hypertension</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Preventive Health</span>
              </div>
            </div>
          </div>
        )}

        {activeModule === "booking" && (
          <div className="p-3 sm:p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-3 text-xs">
            <div className="flex items-center justify-between text-zinc-300 font-medium">
              <span className="flex items-center gap-1.5 text-xs">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Select Available Time Slot
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-500">Today, 15 Aug</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={cn(
                    "py-2 px-2 rounded-lg font-mono text-center transition-all border text-[11px] sm:text-xs cursor-pointer",
                    selectedSlot === slot
                      ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div className="p-2 rounded bg-zinc-950 text-[10px] sm:text-[11px] text-emerald-400 flex items-center justify-between font-mono">
              <span>Appointment Confirmed</span>
              <span>{selectedSlot}</span>
            </div>
          </div>
        )}

        {activeModule === "reviews" && (
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-200 flex items-center gap-1.5 text-xs">
                  <UserCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Verified Patient
                </span>
                <div className="flex text-amber-400 text-xs">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                &ldquo;Booking was smooth and Dr. Jenkins addressed all cardiac diagnostic questions clearly. Highly recommended!&rdquo;
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
