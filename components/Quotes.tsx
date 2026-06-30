"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export function Quotes() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {siteConfig.quotes.map((quote, i) => (
        <motion.figure
          key={quote.text}
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          className="border-l border-border pl-5"
        >
          <blockquote className="text-base leading-relaxed text-fg/90">{quote.text}</blockquote>
          <figcaption className="mt-3 text-sm text-muted">— {quote.author}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
