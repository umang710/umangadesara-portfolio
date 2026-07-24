import {
  Mail,
  Terminal,
  ShieldAlert,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-50 font-sans selection:bg-zinc-800 relative overflow-hidden">
      {/* High-Tech Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-32 relative z-10">
        {/* HERO SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              system_online
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-zinc-100 to-zinc-500 pb-2">
              Umang Adesara
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-xl leading-relaxed">
              Technical Founder & Builder. Architecting secure, high-performance
              systems from the edge to the database.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/umang710"
              target="_blank"
              rel="noreferrer"
              className="group p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/umangadesara710"
              target="_blank"
              rel="noreferrer"
              className="group p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>
            <a
              href="#contact"
              className="group p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>
          </div>
        </section>

        {/* LIVE DEPLOYMENTS / GITHUB SHOWCASE */}
        <section id="projects" className="space-y-8 relative pt-12">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-md border border-zinc-800">
                <Terminal className="w-4 h-4 text-zinc-300" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
                Live Deployments
              </h2>
            </div>
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors"
            >
              View All Repos <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    relational schema for automated job tracking and daily
                    routine optimization.
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
                    Engineered a highly available, multi-container data
                    processing environment using orchestration for development
                    analytics.
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

        {/* SECURITY & RESEARCH */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <div className="p-2 bg-zinc-900 rounded-md border border-zinc-800">
              <ShieldAlert className="w-4 h-4 text-zinc-300" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Vulnerability Research
            </h2>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-zinc-100 text-lg flex items-center gap-2">
                Riot Games Security Report
              </h3>
              <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Resolved
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Responsible disclosure of a security vulnerability via HackerOne.
              Documented the attack vector and submitted detailed reproduction
              steps to the vendor.
            </p>
            <div className="flex gap-2 font-mono text-xs">
              <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                HackerOne
              </span>
              <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                Bug Bounty
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
