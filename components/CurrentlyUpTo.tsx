"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export function CurrentlyUpTo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {siteConfig.currentlyUpTo.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-border bg-card-2/60 p-5 transition-colors hover:border-accent/40"
        >
          <div className="grid size-11 place-items-center rounded-xl border border-border bg-card-3 text-2xl">
            {item.emoji}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
