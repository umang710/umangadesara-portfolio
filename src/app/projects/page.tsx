import { Terminal, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Projects | Umang Adesara",
  description: "Live deployments and technical architecture.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <section className="space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>System Architecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Live Deployments
          </h1>
          <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
            A collection of my recent engineering builds, from full-stack
            applications to distributed data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          {/* Project 1: Productivity Engine */}
          <a
            href="https://your-live-project-url.com"
            target="_blank"
            rel="noreferrer"
            className="group block p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-100 text-lg mb-3 group-hover:text-blue-400 transition-colors">
                  Personal Productivity Engine
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Full-stack application architecture utilizing a custom
                  relational schema for automated job tracking and daily routine
                  optimization.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                    Flutter
                  </span>
                  <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                    Supabase
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300" />
              </div>
            </div>
          </a>

          {/* Project 2: Distributed Data */}
          <a
            href="https://github.com/YOUR_GITHUB/hadoop-cluster"
            target="_blank"
            rel="noreferrer"
            className="group block p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-100 text-lg mb-3 group-hover:text-purple-400 transition-colors">
                  Distributed Data Infrastructure
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Engineered a highly available, multi-container data processing
                  environment using orchestration for development analytics.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                    Hadoop
                  </span>
                  <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                    Docker
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
