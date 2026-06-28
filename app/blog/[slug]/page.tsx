import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.excerpt };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <header className="mt-6">
        <time className="text-sm font-medium tracking-wide text-accent">
          {post.meta.date ? formatDate(post.meta.date) : ""}
        </time>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          {post.meta.title}
        </h1>
        <div className="accent-rule mt-4" />
      </header>

      <div
        className="prose prose-invert mt-8 max-w-none
          prose-headings:font-display prose-headings:tracking-tight
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-fg prose-code:text-accent
          prose-blockquote:border-l-accent prose-blockquote:text-fg/80"
      >
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
