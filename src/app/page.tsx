import { Cpu, GitCommit, Network } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-brand-accent/20 dark:selection:bg-brand-accent/40 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-brand-accent/20 text-xs font-mono text-zinc-600 dark:text-zinc-400 backdrop-blur-sm shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              system_online
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-accent pb-2 transition-colors duration-300">
              Umang Adesara
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light tracking-wide max-w-xl leading-relaxed transition-colors duration-300">
              Lead Software Engineer. Architecting scalable, full-stack systems
              and data-driven solutions from the edge to the database.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/umang710"
              target="_blank"
              rel="noreferrer"
              className="group p-3 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-brand-accent/20 rounded-lg hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/40 transition-all duration-300 shadow-sm"
            >
              <FaGithub className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/umangadesara710"
              target="_blank"
              rel="noreferrer"
              className="group p-3 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-brand-accent/20 rounded-lg hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/40 transition-all duration-300 shadow-sm"
            >
              <FaLinkedin className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors" />
            </a>
            <Link
              href="/contact"
              className="group p-3 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-brand-accent/20 rounded-lg hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/40 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors" />
            </Link>
          </div>
        </section>

        {/* ENGINEERING STACK & PHILOSOPHY */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out fill-mode-both">
          <div className="flex items-center gap-3 border-b border-brand-accent/20 pb-4 transition-colors duration-300">
            <div className="p-2 bg-white/60 dark:bg-zinc-900/60 rounded-md border border-brand-accent/20 shadow-sm transition-colors duration-300">
              <Cpu className="w-4 h-4 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
              Core Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
                The Philosophy
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
                I build high-performance web applications with a focus on edge
                computing, secure database architectures, and seamless user
                experiences. Specializing in full-lifecycle development to
                ensure systems are scalable from day one.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Java",
                "Python",
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "AWS",
                "Docker",
                "Supabase",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-3 rounded-lg border border-brand-accent/20 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/50 hover:text-brand-accent dark:hover:text-brand-accent text-zinc-700 dark:text-zinc-300 transition-all cursor-default hover:-translate-y-1 duration-300 shadow-sm"
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & TRAJECTORY */}
        <section className="space-y-8 relative">
          <div className="flex items-center gap-3 border-b border-brand-accent/20 pb-4 transition-colors duration-300">
            <div className="p-2 bg-white/60 dark:bg-zinc-900/60 rounded-md border border-brand-accent/20 shadow-sm transition-colors duration-300">
              <GitCommit className="w-4 h-4 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
              System Log
            </h2>
          </div>

          <div className="relative border-l border-brand-accent/30 ml-3 space-y-12 pb-4 pt-2 transition-colors duration-300">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border border-brand-accent ring-4 ring-brand-light dark:ring-zinc-900 transition-colors duration-300" />
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-xs font-mono text-brand-accent transition-colors duration-300">
                  Apr 2026 — Present
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                  Lead Software Engineer
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">nexvest.in</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
                Architecting and deploying a highly scalable, full-stack
                investment analysis platform. Engineered optimized REST APIs and
                a relational MySQL schema, reducing data retrieval latency by
                40% for over 500 active users.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border border-brand-accent/60 ring-4 ring-brand-light dark:ring-zinc-900 transition-colors duration-300" />
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-xs font-mono text-brand-accent/80 transition-colors duration-300">
                  2023 — 2026
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                  MSc. in Data Science
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                  Christ (Deemed to be University), Bengaluru
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
                Advanced studies focusing on predictive modeling, complex data
                structures, and statistical analysis to bridge the gap between
                backend engineering and machine learning.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border border-brand-accent/60 ring-4 ring-brand-light dark:ring-zinc-900 transition-colors duration-300" />
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-xs font-mono text-brand-accent/80 transition-colors duration-300">
                  Dec 2022 — Apr 2023
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                  Software Developer Intern
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                  Salahkaar Consultants
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
                Developed critical components of an Employee Management System
                utilizing Python and Node.js. Optimized backend SQL queries to
                successfully reduce data retrieval times by 15% across HR
                operations.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border border-brand-accent/60 ring-4 ring-brand-light dark:ring-zinc-900 transition-colors duration-300" />
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-xs font-mono text-brand-accent/80 transition-colors duration-300">
                  2020 — 2023
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">B.C.A.</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                  Symbiosis Institute of Computer Studies and Research, Pune
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
                Foundational computer science education establishing core
                competencies in Data Structures, Algorithms, and Object-Oriented
                Programming principles.
              </p>
            </div>
          </div>
        </section>

        {/* APPLIED AI & RESEARCH */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-brand-accent/20 pb-4 transition-colors duration-300">
            <div className="p-2 bg-white/60 dark:bg-zinc-900/60 rounded-md border border-brand-accent/20 shadow-sm transition-colors duration-300">
              <Network className="w-4 h-4 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
              Research Paper
            </h2>
          </div>

          <div className="p-6 border border-brand-accent/20 rounded-xl bg-white/40 dark:bg-zinc-900/40 hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-all duration-300 backdrop-blur-sm shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg flex items-center gap-2 transition-colors duration-300">
                Stock Price Trend Analysis
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 text-justify transition-colors duration-300">
              Conducted quantitative research on market movement patterns,
              implementing LSTM-based predictive modeling to forecast trends
              with an 85% accuracy rate.
            </p>
            <div className="flex gap-2 font-mono text-xs">
              <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm transition-colors duration-300">
                TensorFlow
              </span>
              <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm transition-colors duration-300">
                Python
              </span>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}