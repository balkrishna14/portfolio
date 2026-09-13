import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://balakrishna-pandey.vercel.app"),
  title: "BalKrishna Pandey | Software Developer",
  description:
    "Software Developer with 2+ years of experience building and maintaining production-grade applications using React, TypeScript, Next.js, and modern web technologies. Currently contributing to Tata Steel Logistics operations at Tata Consultancy Services (TCS).",
  keywords: [
    "BalKrishna Pandey",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tata Consultancy Services",
    "Tata Steel Logistics",
    "DocRev",
    "PulseBoard",
    "PhoneHub",
  ],
  authors: [{ name: "BalKrishna Pandey" }],
  creator: "BalKrishna Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balakrishna-pandey.vercel.app",
    title: "BalKrishna Pandey | Software Developer",
    description:
      "Software Developer with 2+ years of experience building scalable, user-focused web applications with React, TypeScript, and Next.js.",
    siteName: "BalKrishna Pandey Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BalKrishna Pandey - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BalKrishna Pandey | Software Developer",
    description:
      "Software Developer with 2+ years of experience building scalable web applications with React, TypeScript, and Next.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-grid-pattern">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
