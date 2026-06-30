import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/site.config";

const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <div className="mx-auto flex min-h-screen max-w-[1380px] flex-col gap-8 p-4 sm:p-6 md:flex-row md:gap-10 md:p-8 lg:gap-14 lg:p-12">
          <Sidebar />
          <main className="flex min-w-0 flex-1 flex-col rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_18px_70px_rgba(34,31,25,0.07)] sm:p-9 md:p-10 lg:p-14">
            <div className="mb-14 flex justify-start md:justify-end"><Nav /></div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
