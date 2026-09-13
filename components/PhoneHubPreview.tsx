"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Smartphone,
  Cpu,
  Camera,
  BatteryCharging,
  Layers,
  Sparkles,
  Award,
  ShoppingCart,
  Check,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneSpec {
  id: string;
  name: string;
  brand: string;
  price: string;
  tag: string;
  antutu: number;
  chipset: string;
  display: string;
  camera: string;
  battery: string;
  charging: string;
  colors: { name: string; hex: string; glow: string }[];
  accentColor: string;
  screenWallpaper: string;
  notchType: "dynamic-island" | "punch-hole";
}

const PHONES_DATA: PhoneSpec[] = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: "₹1,44,900",
    tag: "Flagship Titan",
    antutu: 2185000,
    chipset: "Apple A18 Pro (3nm)",
    display: "6.9\" Super Retina XDR OLED 120Hz",
    camera: "48MP Fusion + 48MP Ultra-Wide + 5x Tele",
    battery: "4685 mAh",
    charging: "30W Fast / 25W MagSafe",
    accentColor: "#94a3b8",
    screenWallpaper: "from-amber-600/30 via-stone-800 to-zinc-950",
    notchType: "dynamic-island",
    colors: [
      { name: "Desert Titanium", hex: "#c5b29c", glow: "rgba(197, 178, 156, 0.4)" },
      { name: "Natural Titanium", hex: "#9da19f", glow: "rgba(157, 161, 159, 0.4)" },
      { name: "White Titanium", hex: "#e5e5e5", glow: "rgba(229, 229, 229, 0.3)" },
      { name: "Black Titanium", hex: "#2b2a29", glow: "rgba(43, 42, 41, 0.5)" },
    ],
  },
  {
    id: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: "₹1,29,999",
    tag: "AI Flagship",
    antutu: 2090000,
    chipset: "Snapdragon 8 Gen 3 for Galaxy",
    display: "6.8\" Dynamic AMOLED 2X 120Hz Gorilla Armor",
    camera: "200MP Main + 50MP 5x + 10MP 3x + 12MP UW",
    battery: "5000 mAh",
    charging: "45W Fast Wired / 15W Wireless",
    accentColor: "#38bdf8",
    screenWallpaper: "from-blue-600/30 via-indigo-900 to-zinc-950",
    notchType: "punch-hole",
    colors: [
      { name: "Titanium Gray", hex: "#63666a", glow: "rgba(99, 102, 106, 0.4)" },
      { name: "Titanium Violet", hex: "#4b4453", glow: "rgba(75, 68, 83, 0.4)" },
      { name: "Titanium Yellow", hex: "#d9cb9e", glow: "rgba(217, 203, 158, 0.4)" },
      { name: "Titanium Black", hex: "#1f2022", glow: "rgba(31, 32, 34, 0.5)" },
    ],
  },
  {
    id: "pixel-9-pro-xl",
    name: "Pixel 9 Pro XL",
    brand: "Google",
    price: "₹1,24,999",
    tag: "Gemini AI Beast",
    antutu: 1780000,
    chipset: "Google Tensor G4 (4nm)",
    display: "6.8\" Super Actua LTPO OLED 3000 nits",
    camera: "50MP Main + 48MP 5x Tele + 48MP UW + AI Zoom",
    battery: "5060 mAh",
    charging: "37W Fast / 23W Wireless",
    accentColor: "#34d399",
    screenWallpaper: "from-emerald-600/30 via-teal-950 to-zinc-950",
    notchType: "punch-hole",
    colors: [
      { name: "Hazel", hex: "#858b82", glow: "rgba(133, 139, 130, 0.4)" },
      { name: "Obsidian", hex: "#22252a", glow: "rgba(34, 37, 42, 0.5)" },
      { name: "Porcelain", hex: "#ece8df", glow: "rgba(236, 232, 223, 0.3)" },
      { name: "Rose Quartz", hex: "#ddb4b5", glow: "rgba(221, 180, 181, 0.4)" },
    ],
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: "₹64,999",
    tag: "Performance King",
    antutu: 2110000,
    chipset: "Snapdragon 8 Gen 3 (4nm)",
    display: "6.82\" 2K ProXDR 120Hz 4500 nits",
    camera: "50MP Sony LYT-808 + 64MP 3x Periscope + 48MP",
    battery: "5400 mAh",
    charging: "100W SUPERVOOC / 50W AIRVOOC",
    accentColor: "#f87171",
    screenWallpaper: "from-emerald-700/40 via-zinc-900 to-zinc-950",
    notchType: "punch-hole",
    colors: [
      { name: "Emerald Green", hex: "#234e40", glow: "rgba(35, 78, 64, 0.5)" },
      { name: "Silky Black", hex: "#1c1d1f", glow: "rgba(28, 29, 31, 0.5)" },
      { name: "Glacial White", hex: "#e2e8f0", glow: "rgba(226, 232, 240, 0.3)" },
    ],
  },
];

export function PhoneHubPreview() {
  const [activeTab, setActiveTab] = useState<"catalog" | "compare" | "benchmarks">("catalog");
  const [selectedPhoneId, setSelectedPhoneId] = useState<string>("iphone-16-pro-max");
  const [comparePhoneId, setComparePhoneId] = useState<string>("galaxy-s24-ultra");
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const phone = PHONES_DATA.find((p) => p.id === selectedPhoneId) || PHONES_DATA[0];
  const comparePhone = PHONES_DATA.find((p) => p.id === comparePhoneId) || PHONES_DATA[1];
  const activeColor = phone.colors[selectedColorIdx] || phone.colors[0];

  const handleSelectPhone = (id: string) => {
    setSelectedPhoneId(id);
    setSelectedColorIdx(0);
    setAddedToCart(false);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAddedToCart(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#10b981", "#38bdf8", "#f59e0b"],
    });
    setTimeout(() => setAddedToCart(false), 2400);
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden font-sans shadow-lg">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-1.5 font-mono text-zinc-400 text-[11px] truncate max-w-[140px] sm:max-w-none">
            phonehub.app/catalog
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-[11px] font-mono">
            48+ Phones
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-mono hidden xs:inline-block">
            Compare Dock
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 px-3 sm:px-4 pt-2.5 bg-zinc-950 border-b border-zinc-800/80 overflow-x-auto text-xs no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab("catalog")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap cursor-pointer",
            activeTab === "catalog"
              ? "text-cyan-400 border-cyan-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive QuickView</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("compare")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap cursor-pointer",
            activeTab === "compare"
              ? "text-cyan-400 border-cyan-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>Spec Arena Showdown</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("benchmarks")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap cursor-pointer",
            activeTab === "benchmarks"
              ? "text-cyan-400 border-cyan-500 bg-zinc-900/60"
              : "text-zinc-400 border-transparent hover:text-zinc-200"
          )}
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>AnTuTu Benchmark</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-3.5 sm:p-5">
        {/* 1. Interactive QuickView */}
        {activeTab === "catalog" && (
          <div className="space-y-4">
            {/* Device Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {PHONES_DATA.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPhone(p.id)}
                  className={cn(
                    "px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all border whitespace-nowrap cursor-pointer",
                    selectedPhoneId === p.id
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/60 font-semibold shadow-xs"
                      : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                  )}
                >
                  {p.brand} {p.name.split(" ")[1] || ""}
                </button>
              ))}
            </div>

            {/* Main Interactive Phone Showcase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-zinc-900/50 p-3.5 sm:p-4 rounded-xl border border-zinc-800/80">
              {/* Left Column: Realistic CSS Smartphone Render with Dynamic Color */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center">
                <div
                  className="relative w-36 h-60 rounded-[28px] p-2 border-2 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: activeColor.hex,
                    borderColor: activeColor.hex,
                    boxShadow: `0 0 24px ${activeColor.glow}`,
                  }}
                >
                  {/* Outer Bezel */}
                  <div
                    className={cn(
                      "w-full h-full rounded-[22px] bg-gradient-to-b p-2 flex flex-col justify-between relative overflow-hidden border border-white/10",
                      phone.screenWallpaper
                    )}
                  >
                    {/* Screen Top (Dynamic Island or Notch) */}
                    <div className="flex items-center justify-between text-[8px] font-mono text-white/70 px-1 pt-0.5">
                      <span>9:41</span>
                      {phone.notchType === "dynamic-island" ? (
                        <div className="w-12 h-3 bg-black rounded-full mx-auto flex items-center justify-end px-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                      ) : (
                        <div className="w-2.5 h-2.5 bg-black rounded-full mx-auto" />
                      )}
                      <span>5G</span>
                    </div>

                    {/* Mid Screen Content */}
                    <div className="text-center py-2 space-y-0.5">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-black/40 text-[9px] font-mono text-cyan-300 backdrop-blur-xs border border-cyan-500/30">
                        {phone.brand} 2026
                      </span>
                      <div className="text-xs font-bold text-white tracking-tight leading-tight">
                        {phone.name}
                      </div>
                      <div className="text-[10px] text-zinc-300 font-mono">
                        {phone.price}
                      </div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="w-12 h-1 bg-white/40 rounded-full mx-auto mb-0.5" />
                  </div>
                </div>

                {/* Color Swatch Selector */}
                <div className="mt-3 flex items-center gap-1.5">
                  {phone.colors.map((c, idx) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColorIdx(idx)}
                      className={cn(
                        "w-5 h-5 rounded-full border-2 transition-transform cursor-pointer",
                        selectedColorIdx === idx
                          ? "scale-125 border-cyan-400 ring-2 ring-cyan-400/30"
                          : "border-zinc-700 hover:scale-110"
                      )}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 mt-1">
                  Color: <span className="text-zinc-200">{activeColor.name}</span>
                </div>
              </div>

              {/* Right Column: Specs Breakdown & Live Cart Action */}
              <div className="sm:col-span-7 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-medium">
                    {phone.tag}
                  </span>
                  <span className="text-xs font-bold text-cyan-400 font-mono">
                    {phone.price}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] text-zinc-500 font-mono leading-none">Processor</div>
                      <div className="text-[11px] font-semibold text-zinc-200 truncate">{phone.chipset}</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] text-zinc-500 font-mono leading-none">Camera Array</div>
                      <div className="text-[11px] font-semibold text-zinc-200 truncate">{phone.camera}</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 flex items-center gap-2">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] text-zinc-500 font-mono leading-none">Battery & Charging</div>
                      <div className="text-[11px] font-semibold text-zinc-200 truncate">
                        {phone.battery} • {phone.charging}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Action Button with Confetti */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={cn(
                    "w-full py-2 px-3 rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs",
                    addedToCart
                      ? "bg-emerald-500 text-zinc-950 font-bold"
                      : "bg-cyan-600 hover:bg-cyan-500 text-white active:scale-[0.98]"
                  )}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to PhoneHub Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Simulate Add to Cart & EMI</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Side-by-Side Comparison Arena Showdown */}
        {activeTab === "compare" && (
          <div className="space-y-3">
            {/* Showdown Header */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs">
              <div className="flex items-center gap-1 min-w-0">
                <span className="font-bold text-cyan-400 truncate">{phone.name.split(" ")[0]} {phone.name.split(" ")[1] || ""}</span>
                <span className="text-[10px] font-mono text-zinc-500">VS</span>
                <select
                  value={comparePhoneId}
                  onChange={(e) => setComparePhoneId(e.target.value)}
                  className="bg-zinc-950 text-emerald-400 font-bold text-xs rounded border border-zinc-700 px-1.5 py-0.5 outline-none"
                >
                  {PHONES_DATA.filter((p) => p.id !== selectedPhoneId).map((p) => (
                    <option key={p.id} value={p.id} className="bg-zinc-900 text-zinc-200">
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                Live Arena
              </span>
            </div>

            {/* Side-by-Side Specs Grid */}
            <div className="space-y-2 text-xs">
              {/* Row 1: Chipset & Antutu */}
              <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-indigo-400" /> Chipset & AnTuTu Score
                  </span>
                  <span className="text-emerald-400 text-[10px]">
                    Winner: {phone.antutu >= comparePhone.antutu ? phone.brand : comparePhone.brand}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 font-mono truncate">{phone.brand}</div>
                    <div className="font-semibold text-zinc-200 truncate">{phone.chipset}</div>
                    <div className="text-cyan-400 font-mono text-[10px] mt-0.5">{phone.antutu.toLocaleString()} pts</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 font-mono truncate">{comparePhone.brand}</div>
                    <div className="font-semibold text-zinc-200 truncate">{comparePhone.chipset}</div>
                    <div className="text-emerald-400 font-mono text-[10px] mt-0.5">{comparePhone.antutu.toLocaleString()} pts</div>
                  </div>
                </div>
              </div>

              {/* Row 2: Camera Hardware */}
              <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-amber-400" /> Camera Sensor Power
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 font-mono truncate">{phone.name}</div>
                    <div className="text-zinc-300 text-[11px] line-clamp-2">{phone.camera}</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 font-mono truncate">{comparePhone.name}</div>
                    <div className="text-zinc-300 text-[11px] line-clamp-2">{comparePhone.camera}</div>
                  </div>
                </div>
              </div>

              {/* Row 3: Charging & Battery */}
              <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <BatteryCharging className="w-3 h-3 text-emerald-400" /> Charging Speed
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-zinc-200 font-semibold">{phone.battery}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">{phone.charging}</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-zinc-200 font-semibold">{comparePhone.battery}</div>
                    <div className="text-[10px] text-emerald-400 font-mono">{comparePhone.charging}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. AnTuTu Benchmark Visualizer */}
        {activeTab === "benchmarks" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-1 border-b border-zinc-800">
              <span className="flex items-center gap-1.5 text-zinc-200 font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> AnTuTu v10 Benchmark Rankings
              </span>
              <span className="text-[10px] text-emerald-400">2026 Flagships</span>
            </div>

            <div className="space-y-2.5 pt-1">
              {PHONES_DATA.map((p) => {
                const maxScore = 2300000;
                const percentage = Math.round((p.antutu / maxScore) * 100);

                return (
                  <div key={p.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-zinc-200 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        {p.name}
                        <span className="text-[10px] font-mono text-zinc-500 font-normal hidden xs:inline">
                          ({p.chipset.split("(")[0]})
                        </span>
                      </span>
                      <span className="font-mono text-cyan-400 font-bold text-xs">
                        {p.antutu.toLocaleString()}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 rounded-full transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
              <span>Benchmark Metric: CPU + GPU + Memory + UX</span>
              <span className="text-emerald-400">99.9% Accuracy</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
