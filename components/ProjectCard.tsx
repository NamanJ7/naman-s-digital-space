"use client";

import { motion } from "framer-motion";
import { Pin } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const card = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col"
    >
      <div
        className="grid aspect-[4/3] place-items-center rounded-2xl border border-border transition-shadow group-hover:shadow-lg group-hover:shadow-black/30"
        style={{ backgroundColor: project.bgColor }}
      >
        <span className="text-6xl drop-shadow-sm">{project.emoji}</span>
      </div>
      <div className="mt-4">
        <h3 className="flex items-center gap-1.5 text-lg font-semibold">
          <Pin className="size-4 -rotate-45 text-accent" />
          <span className="transition-colors group-hover:text-accent">
            {project.title}
          </span>
        </h3>
        <p className="mt-0.5 text-sm text-muted">{project.type}</p>
        <p className="mt-2 text-sm leading-relaxed text-fg/70">
          {project.description}
        </p>
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="block">
        {card}
      </a>
    );
  }
  return card;
}
