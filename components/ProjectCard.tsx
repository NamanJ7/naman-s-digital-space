"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const card = (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-border bg-card-2/65 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-[0_16px_35px_rgba(66,54,42,0.09)]"
    >
      <div className="aspect-video overflow-hidden border-b border-border bg-card-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          style={{ objectPosition: project.imagePosition ?? "center" }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{project.type}</p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-[-0.03em]">{project.title}</h3>
          {project.link && (
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
          )}
        </div>
        <p className="mt-2.5 text-sm leading-6 text-fg/70">{project.description}</p>
      </div>
    </article>
  );

  const motionProps = {
    layout: true,
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.35, ease: "easeOut" as const },
    whileHover: { y: -4 },
  };

  if (project.link) {
    return (
      <motion.a
        {...motionProps}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        {card}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className="h-full">
      {card}
    </motion.div>
  );
}
