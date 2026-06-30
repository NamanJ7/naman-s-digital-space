import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig, type SocialPlatform } from "@/site.config";
import { SubstackIcon } from "@/components/icons";

const iconMap: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  substack: SubstackIcon,
};

export function Sidebar() {
  return (
    <aside className="grid w-full shrink-0 grid-cols-[120px_minmax(0,1fr)] items-start gap-5 md:sticky md:top-8 md:block md:h-fit md:w-[300px]">
      <div className="overflow-hidden rounded-[1rem] border border-border bg-card p-1.5 shadow-[0_14px_45px_rgba(34,31,25,0.08)] md:rounded-[1.25rem] md:p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          className="aspect-[4/5] w-full rounded-[0.65rem] object-cover object-[center_28%] md:rounded-[0.9rem]"
        />
      </div>

      <div className="pt-1 md:mt-6 md:pt-0">
        <h1 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{siteConfig.name}</h1>
        <p className="mt-2 text-xs leading-5 text-muted md:mt-3 md:text-sm md:leading-6">{siteConfig.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-[11px] text-muted md:mt-5 md:gap-x-4 md:text-xs">
          <span className="font-semibold text-accent">{siteConfig.role}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3" /> Canada
          </span>
        </div>
      </div>

      <ul className="col-span-2 grid grid-cols-1 border-t border-border pt-2 sm:grid-cols-2 sm:gap-x-5 md:mt-8 md:block md:pt-3">
        {siteConfig.socials.map((social) => {
          const Icon = iconMap[social.platform];
          return (
            <li key={social.platform}>
              <Link
                href={social.href}
                target={social.platform === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 border-b border-border py-3 transition-colors hover:text-accent"
              >
                <span className="grid size-8 shrink-0 place-items-center text-muted transition-colors group-hover:text-accent">
                  <Icon className="size-[17px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold tracking-[0.16em] text-muted">{social.label}</span>
                  <span className="block truncate text-sm text-fg transition-colors group-hover:text-accent">{social.display}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
