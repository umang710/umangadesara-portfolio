import { getBlogPostBySlug, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.meta.title} | Umang Adesara`,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-brand-accent transition-colors mb-8 font-mono group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        back_to_logs
      </Link>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <header className="mb-12 not-prose">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 text-sm font-mono text-zinc-500">
            <span>{post.meta.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50"></span>
            <span>system_entry</span>
          </div>
        </header>

        <div className="prose-headings:font-bold prose-a:text-brand-accent hover:prose-a:text-brand-accent/80 prose-code:text-brand-accent/90 prose-code:bg-brand-accent/10 prose-code:px-1 prose-code:rounded">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
