"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PenLine, Shapes, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/site.config";

const iconMap: Record<string, LucideIcon> = {
  "Building Pore": Sparkles,
  "Side Projects": Shapes,
  "Writing in Public": PenLine,
  "Compounding Output": Zap,
};

export function CurrentlyUpTo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {siteConfig.currentlyUpTo.map((item, i) => {
        const Icon = iconMap[item.title] ?? Sparkles;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
            whileHover={{ y: -3 }}
            className="group flex min-h-[17rem] flex-col rounded-[1.25rem] border border-border bg-card-2/75 p-6 transition-[border-color,box-shadow] hover:border-accent/45 hover:shadow-[0_16px_35px_rgba(66,54,42,0.08)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-accent/25 bg-card text-accent transition-colors group-hover:border-accent/50">
                <Icon className="size-5" strokeWidth={1.7} />
              </span>
              <span className="font-display text-xs font-semibold tracking-[0.16em] text-muted/60">
                {item.emoji}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>

            {item.title === "Side Projects" && (
              <Link
                href="/portfolio"
                className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-accent hover:underline"
              >
                Browse the portfolio <ArrowRight className="size-4" />
              </Link>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}
