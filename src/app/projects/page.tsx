import { Terminal, ExternalLink, Hammer } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Projects | Umang Adesara",
  description: "Live deployments and technical architecture.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <section className="space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 space-y-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <Terminal className="w-4 h-4 text-brand-accent" />
              <span>System Architecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Live Deployments
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-base leading-relaxed">
              A collection of my recent engineering builds, from full-stack
              applications to machine learning models.
            </p>
          </div>

          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <FaGithub className="w-4 h-4" />
            View All Repos
            <ExternalLink className="w-3.5 h-3.5 text-white/70" />
          </a>
        </div>

        {/* Work in Progress Banner */}
        <div className="flex items-start sm:items-center gap-3 p-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border border-brand-accent/20 rounded-lg shadow-sm transition-colors duration-300">
          <div className="p-2 bg-brand-accent/10 rounded-md shrink-0">
            <Hammer className="w-4 h-4 text-brand-accent" />
          </div>
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <span className="text-brand-accent font-semibold">Infrastructure Update:</span> These deployments are currently being migrated. Live project links are temporarily disabled and will be available soon.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          
          {/* Project 1 */}
          <a
            href="#"
            aria-disabled="true"
            className="group block p-6 border border-brand-accent/20 rounded-xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm shadow-sm relative overflow-hidden opacity-60 pointer-events-none transition-colors duration-300"
          >
            <div className="absolute top-4 right-4 text-zinc-400 dark:text-zinc-500">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-3">
                  Personal Productivity Engine
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Engineered a cross-platform routine management application
                  featuring a highly responsive frontend and sub-50ms real-time
                  database syncing.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-accent/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                    Flutter
                  </span>
                  <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                    Supabase
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </div>
          </a>

          {/* Project 2 */}
          <a
            href="#"
            aria-disabled="true"
            className="group block p-6 border border-brand-accent/20 rounded-xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm shadow-sm relative overflow-hidden opacity-60 pointer-events-none transition-colors duration-300"
          >
            <div className="absolute top-4 right-4 text-zinc-400 dark:text-zinc-500">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-3">
                  Geospatial Mapping System
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Built an interactive GIS dashboard successfully visualizing
                  over 10,000 complex environmental metrics for dynamic spatial
                  data analysis.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-accent/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                    Leaflet.js
                  </span>
                  <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                    QGIS
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </div>
          </a>

          {/* Project 3 */}
          <a
            href="#"
            aria-disabled="true"
            className="group block p-6 border border-brand-accent/20 rounded-xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm shadow-sm relative overflow-hidden md:col-span-2 opacity-60 pointer-events-none transition-colors duration-300"
          >
            <div className="absolute top-4 right-4 text-zinc-400 dark:text-zinc-500">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-3">
                  Code Summarization Framework
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Developed an NLP-driven code summarization framework
                  generating context-aware explanations, effectively reducing
                  manual code review times by 20% to improve maintainability.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-accent/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                    Python
                  </span>
                  <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                    PyTorch
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </div>
          </a>

        </div>
      </section>
    </main>
  );
}