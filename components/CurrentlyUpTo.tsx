"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export function CurrentlyUpTo() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {siteConfig.currentlyUpTo.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          className="group grid gap-3 py-6 sm:grid-cols-[48px_180px_1fr] sm:items-start"
        >
          <div className="grid size-9 place-items-center rounded-full border border-border text-sm text-accent transition-colors group-hover:border-accent">
            {item.emoji}
          </div>
          <h3 className="text-base font-semibold">{item.title}</h3>
          <div className="max-w-xl text-sm leading-7 text-muted">
            <p>{item.body}</p>
            {item.title === "Side Projects" && (
              <Link href="/portfolio" className="mt-2 inline-block font-semibold text-accent hover:underline">
                Browse the portfolio →
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
