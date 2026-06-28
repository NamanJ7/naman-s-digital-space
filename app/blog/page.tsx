import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { SubscribeBox } from "@/components/SubscribeBox";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays, notes, and my newsletter.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <SectionHeading>Blog</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Essays and notes on engineering, research, and ideas worth chasing.
      </p>

      <div className="mt-8">
        <SubscribeBox />
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {posts.length === 0 ? (
          <p className="text-muted">No posts yet — check back soon.</p>
        ) : (
          posts.map((post) => <BlogCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
