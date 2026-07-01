import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SubstackIcon } from "@/components/icons";

const topics = [
  "Honest lessons from building AI products and startups",
  "First-principles breakdowns of product and business decisions",
  "Experiments, mistakes, and the systems I use to keep shipping",
  "Ideas on leverage, long-term thinking, and meaningful impact",
];

export function SubscribeBox() {
  return (
    <section className="overflow-hidden rounded-[1.35rem] border border-border bg-card-2 p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <SubstackIcon className="size-4" />
            <span className="eyebrow">Naman&apos;s Process</span>
          </div>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Notes from inside the build.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            A practical newsletter about building, thinking, and becoming more effective—written while I&apos;m doing the work.
          </p>
        </div>

        <ul className="space-y-3">
          {topics.map((topic) => (
            <li key={topic} className="flex gap-3 text-sm leading-6 text-fg/80">
              <Check className="mt-1 size-4 shrink-0 text-accent" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Thoughtful notes, sent when there&apos;s something worth sharing.</p>
        <Link
          href={`${siteConfig.substackUrl.replace(/\/$/, "")}/subscribe`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
        >
          Subscribe to my newsletter
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
