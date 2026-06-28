"use client";

import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";
import { siteConfig } from "@/site.config";

export function Quotes() {
  return (
    <div className="flex flex-col gap-4">
      {siteConfig.quotes.map((quote, i) => (
        <motion.figure
          key={quote.text}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card-2/60 p-6 pl-7"
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-accent" />
          <QuoteIcon className="size-5 text-accent/70" />
          <blockquote className="mt-3 text-lg leading-relaxed text-fg/90">
            {quote.text}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted">
            — {quote.author}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
