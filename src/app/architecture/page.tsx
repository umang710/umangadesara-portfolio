import { Layers, Server, Code, Workflow, Database } from "lucide-react";

export const metadata = {
  title: "Architecture | Umang Adesara",
  description: "A deep dive into the engineering behind this portfolio.",
};

export default function ArchitecturePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <section className="space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400">
            <Layers className="w-4 h-4 text-brand-accent" />
            <span>System Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            How It&apos;s Built
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            This portfolio is not just a digital resume; it is a live demonstration of modern web architecture. It leverages edge computing, server-side rendering, and strict type safety to deliver a highly performant, zero-latency experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="space-y-8">
          
          {/* Card 1 */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Server className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Next.js App Router & React 19</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
              The application utilizes the modern Next.js App Router paradigm. By default, pages are rendered entirely as <strong>Server Components</strong>, stripping JavaScript bloat from the client bundle to achieve near-instant First Contentful Paint (FCP). 
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Database className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Server Actions & Data Pipelines</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
              Instead of traditional REST endpoints, form submissions are handled via Next.js <strong>Server Actions</strong> (<code>useActionState</code>). This allows form data to be securely mutated on the backend without requiring manual API route setup.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Code className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Design System & Type Safety</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
              Styled with <strong>Tailwind CSS</strong>, utilizing a custom color palette with glassmorphism effects applied conditionally to maintain high frame rates. The entire codebase is strictly typed with <strong>TypeScript</strong>.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Workflow className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">CI/CD & Edge Delivery</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
              Deployed on a global edge network. Static assets are heavily cached at the edge (CDN) for zero-latency retrieval worldwide.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}