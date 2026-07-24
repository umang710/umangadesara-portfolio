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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 space-y-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500">
              <Terminal className="w-4 h-4 text-[#BB528A]" />
              <span>System Architecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Live Deployments
            </h1>
            <p className="text-zinc-600 max-w-xl text-base leading-relaxed">
              A collection of my recent engineering builds, from full-stack
              applications to machine learning models.
            </p>
          </div>

          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#BB528A] hover:bg-[#a04575] rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <FaGithub className="w-4 h-4" />
            View All Repos
            <ExternalLink className="w-3.5 h-3.5 text-white/70" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          {/* Project 1: Productivity Engine */}
          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="group block p-6 border border-[#BB528A]/20 rounded-xl bg-white/40 hover:bg-white/70 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-zinc-400 group-hover:text-[#BB528A] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 text-lg mb-3 group-hover:text-[#BB528A] transition-colors">
                  Personal Productivity Engine
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Engineered a cross-platform routine management application
                  featuring a highly responsive frontend and sub-50ms real-time
                  database syncing.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#BB528A]/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-white border border-[#BB528A]/30 text-[#BB528A] px-2.5 py-1 rounded-md shadow-sm">
                    Flutter
                  </span>
                  <span className="bg-white border border-[#BB528A]/30 text-[#BB528A] px-2.5 py-1 rounded-md shadow-sm">
                    Supabase
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-[#BB528A]" />
              </div>
            </div>
          </a>

          {/* Project 2: Geospatial Mapping */}
          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="group block p-6 border border-[#BB528A]/20 rounded-xl bg-white/40 hover:bg-white/70 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-zinc-400 group-hover:text-[#BB528A] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 text-lg mb-3 group-hover:text-[#BB528A] transition-colors">
                  Geospatial Mapping System
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Built an interactive GIS dashboard successfully visualizing
                  over 10,000 complex environmental metrics for dynamic spatial
                  data analysis.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#BB528A]/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-white border border-[#BB528A]/30 text-[#BB528A] px-2.5 py-1 rounded-md shadow-sm">
                    Leaflet.js
                  </span>
                  <span className="bg-white border border-[#BB528A]/30 text-[#BB528A] px-2.5 py-1 rounded-md shadow-sm">
                    QGIS
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-[#BB528A]" />
              </div>
            </div>
          </a>

          {/* Project 3: Code Summarization */}
          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="group block p-6 border border-[#BB528A]/20 rounded-xl bg-white/40 hover:bg-white/70 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md relative overflow-hidden md:col-span-2"
          >
            <div className="absolute top-4 right-4 text-zinc-400 group-hover:text-[#BB528A] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 text-lg mb-3 group-hover:text-[#BB528A] transition-colors">
                  Code Summarization Framework
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Developed an NLP-driven code summarization framework
                  generating context-aware explanations, effectively reducing
                  manual code review times by 20% to improve maintainability.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#BB528A]/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-white border border-[#BB528A]/30 text-[#BB528A] px-2.5 py-1 rounded-md shadow-sm">
                    Python
                  </span>
                  <span className="bg-white border border-[#BB528A]/30 text-[#BB528A] px-2.5 py-1 rounded-md shadow-sm">
                    PyTorch
                  </span>
                </div>
                <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-[#BB528A]" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
