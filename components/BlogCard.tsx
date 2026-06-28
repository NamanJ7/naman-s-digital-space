import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-border bg-card-2/50 p-6 transition-colors hover:border-accent/40 hover:bg-card-2"
    >
      <div className="flex items-center justify-between gap-4">
        <time className="text-xs font-medium tracking-wide text-muted">
          {post.date ? formatDate(post.date) : ""}
        </time>
        <ArrowUpRight className="size-5 text-muted transition-colors group-hover:text-accent" />
      </div>
      <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-fg/70">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
