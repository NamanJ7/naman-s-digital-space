import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { SubscribeBox } from "@/components/SubscribeBox";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, field notes, and Naman's Process newsletter.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <SectionHeading>Writing</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Essays, field notes, and the thinking behind what I&apos;m building.
      </p>

      <div className="mt-8"><SubscribeBox /></div>

      <div className="mt-14">
        <p className="eyebrow">Latest essays</p>
        <div className="mt-5 flex flex-col gap-4">
          {posts.length === 0 ? (
            <p className="text-muted">No posts yet — check back soon.</p>
          ) : (
            posts.map((post) => <BlogCard key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}
