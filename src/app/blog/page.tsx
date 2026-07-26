import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Umang Adesara",
  description:
    "Writing about software engineering, data science, and system design.",
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <section className="space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400">
            <BookOpen className="w-4 h-4 text-brand-accent" />
            <span>Digital Garden</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Writing & Case Studies
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-base leading-relaxed">
            Exploring software engineering, AI, and my thoughts on building
            scalable systems.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          {posts.length === 0 ? (
            <p className="text-zinc-500">No posts found.</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 border border-brand-accent/20 rounded-xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm shadow-sm relative overflow-hidden transition-all duration-300 hover:bg-white/70 dark:hover:bg-zinc-800/70 hover:border-brand-accent/40"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm text-zinc-500 font-mono">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg group-hover:text-brand-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
