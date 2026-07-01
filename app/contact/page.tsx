import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig, type SocialPlatform } from "@/site.config";
import { MediumIcon, SubstackIcon, XIcon } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

const iconMap: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  substack: SubstackIcon,
  medium: MediumIcon,
  twitter: XIcon,
};

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div>
      <SectionHeading>Contact</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Have a question, an idea, or just want to say hi? Drop me a message
        below, or reach out directly at{" "}
        <Link className="font-medium text-accent hover:underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </Link>.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />

        <div className="flex flex-col gap-3">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.platform];
            return (
              <Link
                key={social.platform}
                href={social.href}
                target={social.platform === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-border bg-card-2/50 p-4 transition-colors hover:border-accent/40 hover:bg-card-2"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-card-3 text-fg/80 transition-colors group-hover:text-accent">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
