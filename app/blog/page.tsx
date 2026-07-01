import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SubscribeBox } from "@/components/SubscribeBox";

export const metadata: Metadata = {
  title: "Writing",
  description: "Naman's Process newsletter—notes on building, thinking, and becoming more effective.",
};

export default function BlogPage() {
  return (
    <div>
      <SectionHeading>Writing</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Field notes and the thinking behind what I&apos;m building.
      </p>
      <div className="mt-8"><SubscribeBox /></div>
    </div>
  );
}
