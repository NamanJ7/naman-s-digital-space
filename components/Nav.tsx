"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="no-scrollbar flex items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/60 p-1 backdrop-blur">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative shrink-0 rounded-full px-4 py-2 text-sm font-medium"
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-card-2"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors",
                active ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
