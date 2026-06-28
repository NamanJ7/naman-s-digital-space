import type { Metadata } from "next";
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
    </div>
  );
}
