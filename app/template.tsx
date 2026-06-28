"use client";

import { motion } from "framer-motion";

/**
 * A template re-mounts on every navigation, so this gives each page a fade /
 * slide-in transition without the fragility of route-level AnimatePresence.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
