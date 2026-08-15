# BalKrishna Pandey — Developer Portfolio

A modern, production-grade personal developer portfolio built for **BalKrishna Pandey**, Software Developer with 2+ years of professional experience building and scaling enterprise web applications.

> **100% Frontend-Only Architecture**: This portfolio requires **zero backend**, **zero database**, and **zero external API keys**. It compiles to an ultra-fast, statically generated Next.js application that can be deployed straight to **Vercel from GitHub** in seconds.

---

## 🚀 Live Demo & Deployment

- **Target Platform**: [Vercel](https://vercel.com)
- **Deployment Flow**: GitHub Repository &rarr; Vercel &rarr; Live Portfolio
- **Zero Configuration**: Ready to deploy out of the box with no environment variables required.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support with dark default)
- **Micro-Interactions**: [canvas-confetti](https://github.com/catdad/canvas-confetti) for subtle celebratory feedback

---

## ✨ Features & Highlights

- **Hero Section**: High-impact value proposition, live role availability indicator, primary action buttons (View Projects, Download Resume, Contact Me), and direct social connections.
- **Production Experience**: Highlights 2+ years at **Tata Consultancy Services (TCS)** on the **Tata Steel – Logistics Project**, supporting **~10,000 active users** across India.
- **Featured Projects**:
  - **DocRev**: Doctor Review & Appointment Platform ([docrev.in](https://docrev.in)) with 5+ core modules, 15+ React components, and 10+ REST API endpoints. Includes an interactive simulated doctor discovery preview and a direct Live Demo link.
  - **PulseBoard**: Real-Time Observability & Monitoring Platform built with Next.js, TypeScript, SSE, and Redis Pub/Sub telemetry. Includes an interactive in-card simulated live metrics dashboard.
- **Verified Skills Grid**: Categorized into Frontend, Backend, Databases, Core Engineering, AI, and Tools strictly grounded in the verified resume (zero arbitrary percentage bars).
- **Education Timeline**:
  - **B.Tech – Computer Science** (SRM University, Chennai | 2019 – 2023 | CGPA: 8.69 / 10.0)
  - **Class XII / 12th Standard** (Sri Prakash Synergy School, Kakinada | MPC | 2019 | Score: 72%)
  - **Class X / 10th Standard** (Sri Prakash VidyaNiketan | 2017 | CGPA: 10.0 / 10.0)
- **Contact & Resume**: Direct `mailto:`, clickable phone dialer (`tel:+918789959135`), 1-click clipboard copy feature with toast feedback, and a static resume download linked to `/BalKrishna-Pandey-Resume.pdf`.
- **Accessibility & SEO**: Semantic HTML5, visible focus rings, OpenGraph preview cards, structured metadata, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
Portfolio/
├── app/
│   ├── globals.css          # Tailwind CSS v4 directives, custom scrollbars, and grid textures
│   ├── layout.tsx           # SEO metadata, OpenGraph tags, theme provider, and font loading
│   └── page.tsx             # Single-page assembled portfolio sections
├── components/
│   ├── About.tsx            # Engineering experience & SDLC strengths narrative
│   ├── Contact.tsx          # Direct email mailto, phone dialer & clipboard copy (frontend only)
│   ├── DocRevPreview.tsx    # Interactive simulated doctor booking & discovery card
│   ├── Education.tsx        # Chronological academic history (B.Tech, Class XII, Class X)
│   ├── Experience.tsx       # TCS / Tata Steel Logistics timeline & user scale callout
│   ├── Footer.tsx           # Dynamic copyright, social links, and phone link
│   ├── Hero.tsx             # Main hero banner, CTAs, and verified metric badges
│   ├── Navbar.tsx           # Sticky blurred header, active navigation, and mobile menu
│   ├── ProjectCard.tsx      # Side-by-side technical specs and interactive preview widget
│   ├── Projects.tsx         # Featured projects container
│   ├── PulseBoardPreview.tsx# Simulated real-time observability telemetry dashboard
│   ├── ResumeButton.tsx     # Micro-interaction resume download trigger
│   ├── SectionHeader.tsx    # Reusable section title and badge component
│   ├── ThemeProvider.tsx    # Next-themes wrapper
│   └── ThemeToggle.tsx      # Dark / Light theme switcher
├── data/
│   ├── education.ts         # SRM University, Synergy School, VidyaNiketan credentials
│   ├── experience.ts        # TCS employment history and achievements
│   ├── personal.ts          # Profile information, bio, phone, and social URLs
│   ├── projects.ts          # DocRev and PulseBoard specifications
│   └── skills.ts            # Verified skills organized by engineering category
├── lib/
│   └── utils.ts             # Tailwind class merge utility (clsx + twMerge)
├── public/
│   ├── BalKrishna-Pandey-Resume.pdf # Static resume PDF
│   └── og-image.png         # OpenGraph social share image
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/balkrishna14/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Production Build

To verify the production build locally:

```bash
npm run build
npm run start
```

---

## 🚀 Deploying to Vercel

1. Push this repository to **GitHub**.
2. Visit [Vercel](https://vercel.com) and click **"Add New..." &rarr; "Project"**.
3. Import your GitHub repository (`https://github.com/balkrishna14/portfolio`).
4. Vercel automatically detects Next.js.
5. Click **Deploy**. No environment variables or custom build overrides required!

---

## 👤 Author

**BalKrishna Pandey**  
- **Role**: Software Developer / Full Stack Software Developer  
- **Company**: Tata Consultancy Services (TCS)  
- **Project**: Tata Steel – Logistics Project  
- **LinkedIn**: [linkedin.com/in/balkrishnapandey4](https://www.linkedin.com/in/balkrishnapandey4)  
- **GitHub**: [github.com/balkrishna14](https://github.com/balkrishna14)  
- **Email**: [balkrishnapandey.dev@gmail.com](mailto:balkrishnapandey.dev@gmail.com)  
- **Phone**: [+91 8789959135](tel:+918789959135)
