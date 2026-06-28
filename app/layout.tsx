import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/site.config";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <div className="mx-auto flex min-h-screen max-w-[1380px] flex-col gap-4 p-3 sm:p-5 md:flex-row md:gap-6 md:p-6 lg:p-8">
          <Sidebar />
          <main className="relative flex min-w-0 flex-1 flex-col rounded-3xl border border-border bg-card/70 p-5 sm:p-7 md:p-9">
            <div className="mb-8 flex justify-start md:justify-end">
              <Nav />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
