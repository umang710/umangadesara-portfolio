import {
  Layers,
  Server,
  Code,
  Workflow,
  Database,
  Shield,
  Cpu,
  MonitorSmartphone,
  ArrowRight,
  ArrowDown,
  FileText,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Architecture | Umang Adesara",
  description: "A deep dive into the engineering behind this portfolio.",
};

export default function ArchitecturePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <Reveal>
        <section className="space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <Layers className="w-4 h-4 text-brand-accent" />
              <span>System Design</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              How It&apos;s Built
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
              This portfolio is not just a digital resume; it is a live
              demonstration of modern web architecture. It leverages edge
              computing, server-side rendering, and strict type safety to
              deliver a highly performant, zero-latency experience.
            </p>
          </div>

          {/* CSS-Based System Flow Diagram */}
          <div className="p-8 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-brand-accent/20 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider mb-8 text-center">
              Application Data Flow
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Node 1 */}
              <div className="flex flex-col items-center gap-2 w-40 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/30 shadow-inner">
                  <MonitorSmartphone className="w-8 h-8 text-brand-accent" />
                </div>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Client / Browser
                </span>
                <span className="text-xs text-zinc-500">React 19 UI</span>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-brand-accent/40" />
              <ArrowDown className="block md:hidden w-6 h-6 text-brand-accent/40" />

              {/* Node 2 */}
              <div className="flex flex-col items-center gap-2 w-40 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/30 shadow-inner">
                  <Server className="w-8 h-8 text-brand-accent" />
                </div>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Next.js Edge
                </span>
                <span className="text-xs text-zinc-500">App Router</span>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-brand-accent/40" />
              <ArrowDown className="block md:hidden w-6 h-6 text-brand-accent/40" />

              {/* Node 3 */}
              <div className="flex flex-col items-center gap-2 w-40 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/30 shadow-inner">
                  <Cpu className="w-8 h-8 text-brand-accent" />
                </div>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Server Actions
                </span>
                <span className="text-xs text-zinc-500">Node.js Engine</span>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Next.js */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Server className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  React 19 & App Router
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                The application utilizes the modern Next.js paradigm. By
                default, pages are rendered entirely as{" "}
                <strong>Server Components</strong>, stripping JavaScript bloat
                from the client bundle to achieve near-instant First Contentful
                Paint (FCP).
              </p>
            </div>

            {/* Card 2: AI Matcher (Replaced Data Pipelines to be more specific to your app) */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Cpu className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Semantic Match Engine
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                The Recruit Me feature utilizes a custom semantic parsing
                algorithm. It safely evaluates user-submitted job descriptions
                against a strict dimensional array of my verified stack using
                Server Actions.
              </p>
            </div>

            {/* Card 3: Security */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Shield className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Data Mutations
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                Instead of traditional REST endpoints, backend requests are
                handled securely via Next.js <strong>Server Actions</strong> (
                <code>useActionState</code>). This allows form data to be safely
                validated without exposing manual API routes to the public.
              </p>
            </div>

            {/* Card 4: Type Safety */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Code className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Type-Safe UI
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                Styled with a custom <strong>Tailwind CSS</strong> theme using
                CSS variables for seamless light/dark mode transitions. The
                entire codebase is strictly typed with TypeScript to eliminate
                runtime errors.
              </p>
            </div>

            {/* Card 5: Edge Delivery */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Workflow className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  CI/CD Pipeline
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                Code is pushed through a rigorous automated pipeline utilizing{" "}
                <strong>Husky</strong> and <strong>ESLint</strong> pre-commit
                hooks before being deployed globally to edge networks for
                zero-latency retrieval.
              </p>
            </div>

            {/* Card 6: Database/State (Replaced generic Observability) */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Database className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  State Management
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                React hooks (<code>useState</code>, <code>useRef</code>,{" "}
                <code>useFormStatus</code>) are used surgically only in Client
                Components (like the video player and matcher), keeping the
                global bundle exceptionally lightweight.
              </p>
            </div>

            {/* Card 7: MDX Pre-compilation */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <FileText className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Edge-Optimized MDX
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                To completely bypass Cloudflare&apos;s strict Edge Worker
                filesystem limits, a custom Node prebuild script compiles
                Markdown (MDX) into a static JSON payload, enabling zero-latency
                reads.
              </p>
            </div>

            {/* Card 8: Framer Motion Physics */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300 hover:border-brand-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-md">
                  <Zap className="w-5 h-5 text-brand-accent" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  60FPS Physics Engine
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                Micro-interactions and reveal animations are powered by Framer
                Motion&apos;s spring physics. Animations are isolated from
                standard CSS transitions to prevent GPU layout thrashing and
                maintain a strict 60fps.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
