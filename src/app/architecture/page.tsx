import {
  Layers,
  Server,
  Code,
  Workflow,
  Database,
  Shield,
  Activity,
} from "lucide-react";

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
          <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
            <Layers className="w-4 h-4 text-brand-accent" />
            <span>System Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            How It&apos;s Built
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed transition-colors duration-300">
            This portfolio is not just a digital resume; it is a live
            demonstration of modern web architecture. It leverages edge
            computing, server-side rendering, and strict type safety to deliver
            a highly performant, zero-latency experience.
          </p>
        </div>

        {/* Feature Grid - Now a beautifully balanced 6-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Next.js */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Server className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                React 19 & App Router
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
              The application utilizes the modern Next.js paradigm. By default,
              pages are rendered entirely as <strong>Server Components</strong>,
              stripping JavaScript bloat from the client bundle to achieve
              near-instant First Contentful Paint (FCP).
            </p>
          </div>

          {/* Card 2: Data Pipelines */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Database className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                Server Actions
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
              Instead of traditional REST endpoints, form submissions are
              handled via Next.js <strong>Server Actions</strong> (
              <code>useActionState</code>). This allows form data to be securely
              mutated and validated on the backend without requiring manual API
              route setup.
            </p>
          </div>

          {/* Card 3: Security */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Shield className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                Edge Security
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
              API routes and form handlers are protected against abuse. The
              infrastructure is designed to integrate{" "}
              <strong>Upstash Redis</strong> for distributed rate limiting,
              ensuring the system remains highly available during traffic
              spikes.
            </p>
          </div>

          {/* Card 4: Type Safety */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Code className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                Type-Safe UI
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
              Styled with a custom <strong>Tailwind CSS v4</strong> theme using
              CSS variables for seamless light/dark mode transitions. The entire
              codebase is strictly typed with TypeScript to eliminate runtime
              errors.
            </p>
          </div>

          {/* Card 5: Edge Delivery */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Workflow className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                CI/CD Pipeline
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
              Code is pushed through a rigorous automated pipeline utilizing{" "}
              <strong>Husky</strong> and <strong>ESLint</strong> pre-commit
              hooks before being deployed globally to edge networks for
              zero-latency retrieval.
            </p>
          </div>

          {/* Card 6: Observability */}
          <div className="p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-accent/10 rounded-md">
                <Activity className="w-5 h-5 text-brand-accent" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                Observability
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
              The application architecture supports deep telemetry. Web Vitals
              are continuously monitored, and traffic patterns are analyzed to
              ensure maximum performance across all devices and geographical
              regions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
