import blogData from "./blog-data.json";

export interface BlogPostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

interface RawPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getBlogPosts(): BlogPostMeta[] {
  return (blogData as RawPost[])
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      description: post.description,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const post = (blogData as RawPost[]).find((p) => p.slug === slug);
  if (!post) return null;
  return {
    meta: {
      slug: post.slug,
      title: post.title,
      date: post.date,
      description: post.description,
    },
    content: post.content,
  };
}
