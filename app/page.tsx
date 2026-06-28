import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Highlighted } from "@/components/Highlight";
import { SectionHeading } from "@/components/SectionHeading";
import { CurrentlyUpTo } from "@/components/CurrentlyUpTo";
import { Quotes } from "@/components/Quotes";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold sm:text-5xl">Hey! Welcome!</h1>
        <div className="accent-rule mt-4" />

        <div className="mt-6 flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-fg/85">
          {siteConfig.intro.map((paragraph, i) => (
            <p key={i}>
              <Highlighted text={paragraph} />
            </p>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Check out my portfolio
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

      {/* Currently up to */}
      <section>
        <SectionHeading>Currently Up To:</SectionHeading>
        <div className="mt-6">
          <CurrentlyUpTo />
        </div>
      </section>

      {/* Quotes */}
      <section>
        <SectionHeading>Some Quotes I Live By:</SectionHeading>
        <div className="mt-6">
          <Quotes />
        </div>
      </section>
    </div>
  );
}
