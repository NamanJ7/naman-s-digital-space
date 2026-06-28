import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig, type SocialPlatform } from "@/site.config";
import { SubstackIcon } from "@/components/icons";

const iconMap: Record<
  SocialPlatform,
  ComponentType<{ className?: string }>
> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  substack: SubstackIcon,
};

export function Sidebar() {
  return (
    <aside className="w-full shrink-0 rounded-3xl border border-border bg-card/70 p-6 md:sticky md:top-6 md:h-fit md:w-[300px] md:p-7 lg:top-8">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          className="size-28 rounded-full border border-border object-cover md:size-32"
        />
        <h1 className="mt-5 text-2xl font-bold">{siteConfig.name}</h1>
        <span className="mt-3 inline-block rounded-full border border-border bg-card-2 px-4 py-1.5 text-sm text-fg/80">
          {siteConfig.role}
        </span>
      </div>

      <hr className="my-6 border-border" />

      {/* Socials */}
      <ul className="flex flex-col gap-3">
        {siteConfig.socials.map((social) => {
          const Icon = iconMap[social.platform];
          return (
            <li key={social.platform}>
              <Link
                href={social.href}
                target={social.platform === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-xl p-1.5 transition-colors hover:bg-card-2"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-card-2 text-fg/80 transition-colors group-hover:border-accent/50 group-hover:text-accent">
                  <Icon className="size-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium tracking-[0.12em] text-muted">
                    {social.label}
                  </span>
                  <span className="block truncate text-sm text-fg/90 transition-colors group-hover:text-accent">
                    {social.display}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
