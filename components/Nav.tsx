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
    <nav className="no-scrollbar flex items-center gap-6 overflow-x-auto border-b border-border">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative shrink-0 py-2.5 text-sm font-medium"
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-x-0 bottom-[-1px] h-px bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors",
                active ? "text-fg" : "text-muted hover:text-fg",
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
