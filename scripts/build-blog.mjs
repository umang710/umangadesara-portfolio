import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Since we are running in a Node ES module environment or CJS, we can just use process.cwd() 
// from the project root because this is executed via npm run build.
const blogDir = path.join(process.cwd(), "content/blog");
const outputFile = path.join(process.cwd(), "src/lib/blog-data.json");

function generateBlogData() {
  if (!fs.existsSync(blogDir)) {
    console.log("No blog directory found, skipping...");
    fs.writeFileSync(outputFile, JSON.stringify([]));
    return;
  }

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const fullPath = path.join(blogDir, filename);
    const content = fs.readFileSync(fullPath, "utf8");
    const parsed = matter(content);
    
    return {
      slug,
      title: parsed.data.title || "Untitled",
      date: parsed.data.date || "",
      description: parsed.data.description || "",
      content: parsed.content,
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Generated blog data for ${posts.length} posts.`);
}

generateBlogData();
