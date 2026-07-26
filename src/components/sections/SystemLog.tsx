import { GitCommit } from "lucide-react";

export function SystemLog() {
  return (
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
            <span className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
              nexvest.in
            </span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
            Architecting and deploying a highly scalable, full-stack investment
            analysis platform. Engineered optimized REST APIs and a relational
            MySQL schema, reducing data retrieval latency by 40% for over 500
            active users.
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
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
              B.C.A.
            </h3>
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
  );
}
