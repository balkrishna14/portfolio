export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  category: "Full Stack" | "Observability & Next.js" | "Frontend Engineering";
  featured: boolean;
  description: string;
  highlights: string[];
  features: ProjectFeature[];
  metrics: ProjectMetric[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureNote?: string;
}

export const projects: ProjectItem[] = [

  {
    id: "docrev",
    title: "DocRev",
    subtitle: "Doctor Review & Appointment Platform",
    badge: "Production Healthcare Web App",
    category: "Full Stack",
    featured: true,
    description:
      "A comprehensive doctor review, discovery, and appointment booking web platform connecting patients with verified healthcare specialists through an intuitive interface.",
    highlights: [
      "Architected and developed 5+ core modules: Authentication, Doctor Discovery, Reviews, Appointments, and Admin Management.",
      "Engineered 15+ modular, reusable React components delivering a responsive, accessible patient experience.",
      "Built and documented 10+ REST API endpoints with robust error handling and validation.",
      "Integrated MongoDB database with scalable schemas for healthcare providers, ratings, and time-slot schedules.",
      "Implemented AI-powered personalized doctor discovery algorithm matching patient symptoms with appropriate specialists.",
      "Responsive, mobile-optimized UI designed for smooth appointment scheduling and review workflows.",
    ],
    features: [
      {
        title: "5+ Core Modules",
        description: "Modular architecture: Auth, Doctor Discovery, Verified Reviews, Scheduling, and Admin CMS.",
      },
      {
        title: "AI-Powered Discovery",
        description: "Intelligent symptom-to-specialist matching for tailored healthcare practitioner discovery.",
      },
      {
        title: "15+ Reusable Components",
        description: "Polished design system with custom appointment pickers, rating stars, and filtering drawers.",
      },
      {
        title: "10+ REST Endpoints",
        description: "RESTful API layer backed by MongoDB for reliable doctor profiles and patient schedules.",
      },
    ],
    metrics: [
      { label: "Core Modules", value: "5+", subtext: "Auth, Discovery, Reviews, Appointments, Admin" },
      { label: "REST Endpoints", value: "10+", subtext: "Documented API endpoints" },
      { label: "UI Components", value: "15+", subtext: "Modular React components" },
      { label: "Live Domain", value: "docrev.in", subtext: "Production deployment" },
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "AI Discovery",
      "Tailwind CSS",
    ],
    liveUrl: "https://docrev.in",
    githubUrl: "#", // Placeholder
    architectureNote: "Note: The portfolio itself is frontend-only; DocRev is an external full-stack web product.",
  },
  {
    id: "pulseboard",
    title: "PulseBoard",
    subtitle: "Real-Time Application Monitoring & Observability Platform",
    badge: "Flagship Next.js & TypeScript Project",
    category: "Observability & Next.js",
    featured: true,
    description:
      "A high-performance observability platform built with Next.js and TypeScript for real-time application health monitoring, telemetry streaming, and automated incident triage.",
    highlights: [
      "Built with Next.js App Router and TypeScript for fast, type-safe telemetry visualisations.",
      "Real-time tracking of uptime, API performance, request volume, error rates, and p95 latency.",
      "Live telemetry streaming powered by Server-Sent Events (SSE) and Redis Pub/Sub.",
      "Automated incident detection with configurable latency and error threshold alerting.",
      "Secure API key authentication, incident management workflows, and public status pages.",
      "Integrated AI-powered root-cause analysis for accelerated diagnostic triage.",
    ],
    features: [
      {
        title: "Live Telemetry Streaming",
        description: "Server-Sent Events (SSE) & Redis Pub/Sub deliver sub-second metrics updates without polling.",
      },
      {
        title: "Observability Metrics",
        description: "Comprehensive tracking of uptime (99.98%), throughput, error budgets, and latency percentiles.",
      },
      {
        title: "Incident Intelligence",
        description: "Automated threshold triggers with AI-assisted root-cause anomaly diagnostics.",
      },
      {
        title: "Public Status Pages",
        description: "Configurable client-facing status boards with granular service-level health indicators.",
      },
    ],
    metrics: [
      { label: "Uptime Metric", value: "99.98%", subtext: "Target SLA" },
      { label: "p95 Latency", value: "42ms", subtext: "Average API response" },
      { label: "Telemetry", value: "SSE / Redis", subtext: "Live Pub/Sub stream" },
      { label: "Security", value: "API Key Auth", subtext: "Granular scope control" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Server-Sent Events (SSE)",
      "Redis Pub/Sub",
      "REST APIs",
      "Tailwind CSS",
      "AI Root-Cause",
    ],
    liveUrl: "https://pulseboard-imnx.vercel.app",
    githubUrl: "#", // Placeholder
    architectureNote: "Production live deployment on Vercel + interactive preview below.",
  },
  {
    id: "phonehub",
    title: "PhoneHub",
    subtitle: "Next-Gen Smartphone Catalog, Spec Comparison & E-Commerce Web App",
    badge: "Interactive React 19 Application",
    category: "Frontend Engineering",
    featured: true,
    description:
      "A high-performance smartphone discovery, multi-device spec comparison arena, and catalog platform featuring 48+ smartphones across 10 top brands with real-time multi-facet filtering, Antutu benchmarks, live price trackers, and interactive 360 preview.",
    highlights: [
      "Engineered a catalog browsing platform featuring 48+ smartphones across 10 brands with instant faceted search (Brand, Price Range, RAM, Storage, 5G, Camera).",
      "Built an interactive Side-by-Side Comparison Arena evaluating processors, display tech, Antutu benchmark scores, cameras, and battery speeds with dynamic winner highlights.",
      "Integrated real-time cart and wishlist state management with localized persistence and dynamic discount calculations.",
      "Developed an interactive device preview with 360 specs overview, dynamic color variant switchers, and simulated benchmark gauges.",
      "Implemented a responsive, mobile-first dark-mode UI with sleek glassmorphism, instant search autocomplete, and smooth animations.",
    ],
    features: [
      {
        title: "Side-by-Side Spec Arena",
        description: "Direct head-to-head comparison of chipset, display, camera sensor, charging wattage, and Antutu score.",
      },
      {
        title: "Multi-Faceted Instant Search",
        description: "Sub-10ms instantaneous filter engine across 10 top brands, price brackets, RAM/ROM, and 5G support.",
      },
      {
        title: "Live Antutu Benchmarking",
        description: "Visual performance tier rating comparing Snapdragon 8 Gen 3, Apple A18 Pro, Dimensity 9300, and Tensor G4.",
      },
      {
        title: "Interactive Color Switcher",
        description: "Dynamic device preview with realistic chassis tones, color variants, and instant spec breakdowns.",
      },
    ],
    metrics: [
      { label: "Smartphones", value: "48+", subtext: "Cataloged flagship & mid-range" },
      { label: "Top Brands", value: "10", subtext: "Apple, Samsung, Google, etc." },
      { label: "Filter Speed", value: "<10ms", subtext: "Instant client-side query" },
      { label: "State Engine", value: "React 19", subtext: "Cart, Wishlist & Compare Dock" },
    ],
    technologies: [
      "React 19",
      "JavaScript / TypeScript",
      "Vite",
      "Tailwind CSS",
      "Lucide Icons",
      "Canvas Confetti",
      "State Management",
      "Client-Side Storage",
    ],
    liveUrl: "https://phonehub-one.vercel.app",
    githubUrl: "https://github.com/balkrishna14",
    architectureNote: "Live product deployed at phonehub-one.vercel.app + interactive preview included below.",
  },
];
