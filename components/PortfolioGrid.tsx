"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects, type ProjectCategory } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

type Filter = ProjectCategory | "all";

const categoryLabels: Record<ProjectCategory, string> = {
  software: "Software",
  research: "Research",
  "pitch-decks": "Pitch Decks",
};

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "software", label: categoryLabels.software },
  { key: "research", label: categoryLabels.research },
  { key: "pitch-decks", label: categoryLabels["pitch-decks"] },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("all");

  const shown =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
        {filters.map((filter) => {
          const isActive = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-full border border-accent/40 bg-accent/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      {shown.length === 0 && (
        <p className="mt-10 text-center text-muted">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
