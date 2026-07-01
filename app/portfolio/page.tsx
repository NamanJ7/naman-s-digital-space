import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software, research, and consulting projects.",
};

export default function PortfolioPage() {
  return (
    <div>
      <SectionHeading>Portfolio</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        A collection of things I&apos;ve built and explored. Filter by category
        below.
      </p>
      <div className="mt-8">
        <PortfolioGrid />
      </div>

      <div className="mt-12 border-t border-border pt-7">
        <p className="max-w-2xl text-sm leading-7 text-muted">
          These are just a few of the projects I&apos;ve brought to life. You can explore the fuller collection{" "}
          <Link
            href="https://app.notion.com/p/Hey-I-m-Naman-Here-s-what-I-ve-Built-2f4f0fd5745f81229639f20bc15800e8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
          >
            here <ArrowUpRight className="size-3.5" />
          </Link>.
        </p>
      </div>
    </div>
  );
}
