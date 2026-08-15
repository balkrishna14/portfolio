"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  Sparkles,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PulseBoardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "telemetry" | "ai-triage">("overview");
  const [isStreaming, setIsStreaming] = useState(true);
  const [pingCount, setPingCount] = useState(14820);
  const [currentLatency, setCurrentLatency] = useState(42);

  // Subtle simulated live telemetry pulse
  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setPingCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setCurrentLatency((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(36, Math.min(52, prev + delta));
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const services = [
    { name: "Auth & Ingest Gateway", status: "Healthy", latency: `${currentLatency - 14}ms`, uptime: "100%" },
    { name: "SSE Realtime Stream", status: "Healthy", latency: `${currentLatency - 22}ms`, uptime: "99.99%" },
    { name: "Redis Pub/Sub Broker", status: "Healthy", latency: `${currentLatency - 28}ms`, uptime: "100%" },
    { name: "Incident Evaluation Engine", status: "Healthy", latency: `${currentLatency}ms`, uptime: "99.95%" },
  ];

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
            pulseboard-imnx.vercel.app
          </span>
        </div>

        {/* Live SSE Badge */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono hover:bg-emerald-500/20 transition-colors"
            title="Toggle simulated stream"
          >
            <span className={cn("w-1.5 h-1.5 rounded-full bg-emerald-400", isStreaming && "animate-pulse")} />
            <span>{isStreaming ? "SSE Live Stream" : "Stream Paused"}</span>
          </button>
          <span className="text-[10px] text-zinc-500 font-mono hidden md:inline">Mock Telemetry</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 px-4 pt-3 bg-zinc-950 border-b border-zinc-800/80 overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab("overview")}
          className={cn(
            "px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2",
            activeTab === "overview"
              ? "text-emerald-400 border-emerald-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          System Overview
        </button>
        <button
          onClick={() => setActiveTab("telemetry")}
          className={cn(
            "px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2",
            activeTab === "telemetry"
              ? "text-emerald-400 border-emerald-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          Telemetry Ingestion
        </button>
        <button
          onClick={() => setActiveTab("ai-triage")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2",
            activeTab === "ai-triage"
              ? "text-emerald-400 border-emerald-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>AI Root Cause</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5">
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400">Target Uptime</div>
                <div className="mt-1 text-lg font-bold font-mono text-emerald-400">99.98%</div>
                <div className="text-[10px] text-zinc-500">SLA Maintained</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400">p95 Latency</div>
                <div className="mt-1 text-lg font-bold font-mono text-cyan-400">{currentLatency} ms</div>
                <div className="text-[10px] text-emerald-400">▼ 3ms vs baseline</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400">Requests / Min</div>
                <div className="mt-1 text-lg font-bold font-mono text-zinc-100">
                  {pingCount.toLocaleString()}
                </div>
                <div className="text-[10px] text-zinc-500">Live SSE stream</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400">Error Budget</div>
                <div className="mt-1 text-lg font-bold font-mono text-emerald-400">0.02%</div>
                <div className="text-[10px] text-zinc-500">Threshold: &lt; 0.5%</div>
              </div>
            </div>

            {/* Service Health Rows */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs text-zinc-400 px-1 font-mono">
                <span>Cluster Services</span>
                <span>Response Time / Status</span>
              </div>
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/80 text-xs hover:bg-zinc-900/70 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium text-zinc-200">{svc.name}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-zinc-400">{svc.latency}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] border border-emerald-500/20">
                      {svc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "telemetry" && (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex items-center justify-between text-emerald-400 border-b border-zinc-800 pb-1.5">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> Redis Pub/Sub Stream Ingestion
                </span>
                <span className="text-[10px] text-zinc-500">SSE Chunk 256KB/s</span>
              </div>
              <div className="text-[11px] text-zinc-400 space-y-1">
                <p>
                  <span className="text-zinc-600">[14:02:11]</span> <span className="text-cyan-400">EVENT_INGEST:</span> payload parsed (24ms)
                </p>
                <p>
                  <span className="text-zinc-600">[14:02:13]</span> <span className="text-emerald-400">METRICS_AGG:</span> error_budget=0.02% (nominal)
                </p>
                <p>
                  <span className="text-zinc-600">[14:02:15]</span> <span className="text-cyan-400">STATUS_BROADCAST:</span> p95={currentLatency}ms to connected dashboard clients
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-xs flex items-center justify-between text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                API Key Authentication
              </span>
              <span className="font-mono text-emerald-400 text-[11px]">Scoped: `read:telemetry, write:events`</span>
            </div>
          </div>
        )}

        {activeTab === "ai-triage" && (
          <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Root-Cause Diagnostic Report</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                STATUS: NO ANOMALY
              </span>
            </div>

            <div className="text-xs text-zinc-400 leading-relaxed bg-zinc-950 p-3 rounded border border-zinc-800/80">
              <p className="text-zinc-300 font-mono text-[11px] mb-1">Diagnostics Summary:</p>
              <p>
                All endpoint latencies are within the configured 75ms threshold. Error rates are at 0.02% (below the 0.5% incident trigger).
                Redis Pub/Sub queue depth is 0 with sub-second fanout. No automated incident escalation required.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
