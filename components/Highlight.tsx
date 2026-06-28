"use client";

import { motion } from "framer-motion";

/** An animated gold highlighter that "draws" across the text when scrolled into view. */
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <motion.mark
      className="box-decoration-clone rounded-[3px] px-1 font-medium"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-accent), var(--color-accent))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
      initial={{ backgroundSize: "0% 86%", color: "inherit" }}
      whileInView={{ backgroundSize: "100% 86%", color: "#000" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
    >
      {children}
    </motion.mark>
  );
}

/**
 * Renders text where any phrase wrapped in ==double equals== becomes a
 * highlighted span. Used for the intro paragraphs in site.config.ts.
 */
export function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(==[^=]+==)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("==") && part.endsWith("==") ? (
          <Highlight key={i}>{part.slice(2, -2)}</Highlight>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
