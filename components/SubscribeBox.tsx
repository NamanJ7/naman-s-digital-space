"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { siteConfig } from "@/site.config";

export function SubscribeBox() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const base = siteConfig.substackUrl.replace(/\/$/, "");
    const target = email
      ? `${base}/subscribe?email=${encodeURIComponent(email)}`
      : `${base}/subscribe`;
    window.open(target, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 sm:p-7">
      <div className="flex items-center gap-2 text-accent">
        <Mail className="size-5" />
        <span className="text-sm font-semibold tracking-wide">NEWSLETTER</span>
      </div>
      <h3 className="mt-3 text-xl font-bold">Subscribe to my newsletter</h3>
      <p className="mt-1.5 text-sm text-muted">
        New essays and notes, straight to your inbox. No spam, unsubscribe
        anytime.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-2.5 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none placeholder:text-muted focus:border-accent/60"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
