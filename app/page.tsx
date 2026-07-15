import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Highlighted } from "@/components/Highlight";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  const [opening, , , philosophy] = siteConfig.intro;

  return (
    <div className="flex flex-col gap-20">
      <section className="grid gap-10 border-b border-border pb-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
        <div>
          <p className="eyebrow hero-eyebrow">AI products · startups · useful software</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-fg sm:text-6xl lg:text-7xl">
            Hey, I&apos;m Naman!
          </h1>

          <div className="mt-7 max-w-3xl text-xl leading-[1.65] text-fg/80">
            <p><Highlighted text={opening} /></p>
          </div>

          <div className="mt-9 flex flex-wrap gap-5">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 border-b border-fg pb-1 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              See what I&apos;ve built
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Read the process
            </Link>
          </div>
        </div>

        <div className="border-l border-border pl-6">
          <p className="eyebrow">Now building</p>
          <p className="mt-4 text-2xl font-medium tracking-tight">Pore</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Personalized skincare guidance, grounded in your face, products,
            goals, and progress.
          </p>
          <Link
            href="https://poreai.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Visit Pore <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[180px_minmax(0,720px)]">
        <SectionHeading>About</SectionHeading>
        <div className="space-y-7 text-lg leading-[1.85] text-fg/78">
          <p>
            I&apos;m currently building{" "}
            <ProjectLink href="https://poreai.vercel.app/" image="/pore-logo.png" name="Pore" tone="pore" />
            , an AI skincare app that starts with a guided photo of your face,
            then builds a personalized routine around your products, goals, and
            progress.
          </p>
          <p>
            Before this, I built{" "}
            <ProjectLink
              href="https://adorable-kitsune-d82568.netlify.app/"
              image="/agrilanka-logo.png"
              name="AgriLanka"
              tone="agrilanka"
            />
            , an agritech startup that received numerous grants, and it taught
            me what it actually takes to take an idea from zero to something real.
          </p>
          <p>
            Alongside building these products, I&apos;m an AI sales engineering intern at{" "}
            <CompanyLink href="https://usemason.ai/" image="/mason-logo.png" name="Mason" tone="mason" />
            , helping bring AI employees to
            real estate development teams while learning from a team with deep
            startup, AI, and real estate experience. I was also an AI intern at{" "}
            <CompanyLink href="https://equintel.de/" image="/equintel-logo.png" name="Equintel" tone="equintel" />
            , building AI tools for ESG data automation, and worked as a financial
            analyst intern at{" "}
            <CompanyLink href="https://bycig.org/" image="/bycig-logo.png" name="BYCIG" tone="bycig" />
            , supporting early-stage social-impact investing through research,
            financial models, and investment memos.
          </p>
          <p><Highlighted text={philosophy} /></p>
        </div>
      </section>

    </div>
  );
}

function ProjectLink({ href, image, name, tone }: { href: string; image: string; name: string; tone: string }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="project-link" data-tone={tone}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="size-6 rounded-md object-cover" />
      <span>{name}</span>
      <ArrowRight className="size-3.5 -rotate-45 opacity-55" />
    </Link>
  );
}

function CompanyLink({ href, image, name, tone }: { href: string; image: string; name: string; tone: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} website`}
      className="company-link"
      data-tone={tone}
    >
      <span className="company-logo-crop">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} />
      </span>
      <ArrowRight className="size-3.5 -rotate-45 opacity-55" />
    </Link>
  );
}
