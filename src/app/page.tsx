import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, Terminal, ShieldAlert } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
        {/* HERO SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 mb-4">
              <Terminal className="w-4 h-4" />
              <span>system_initialized</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Umang Adesara
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-tight max-w-2xl">
              Technical Founder & Builder. Architecting secure, high-performance
              systems from the edge to the database.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* ARCHITECTURE / PROJECTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <Terminal className="w-5 h-5 text-zinc-400" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Active Deployments
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors bg-white dark:bg-zinc-900/50">
              <h3 className="font-semibold text-lg mb-2">
                Personal Productivity Engine
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                Full-stack mobile application architecture utilizing a custom
                relational schema for job tracking and daily routine
                optimization.
              </p>
              <div className="flex gap-2 font-mono text-xs text-zinc-400">
                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  Flutter
                </span>
                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  Supabase
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors bg-white dark:bg-zinc-900/50">
              <h3 className="font-semibold text-lg mb-2">
                Distributed Data Infrastructure
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                Engineered a highly available, multi-container data processing
                environment using orchestration for academic and development
                analytics.
              </p>
              <div className="flex gap-2 font-mono text-xs text-zinc-400">
                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  Hadoop
                </span>
                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  Docker Compose
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY & RESEARCH */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <ShieldAlert className="w-5 h-5 text-zinc-400" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Vulnerability Research
            </h2>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">
                Riot Games Security Report
              </h3>
              <span className="text-xs font-mono bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded border border-green-200 dark:border-green-800">
                Resolved
              </span>
            </div>
            <p className="text-zinc-500 text-sm mb-4">
              Responsible disclosure of a security vulnerability via HackerOne.
              Documented the attack vector and submitted detailed reproduction
              steps to the vendor.
            </p>
            <div className="flex gap-2 font-mono text-xs text-zinc-400">
              <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                HackerOne
              </span>
              <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                Bug Bounty
              </span>
            </div>
          </div>
        </section>

        {/* COMMAND CENTER / CONTACT */}
        <section
          id="contact"
          className="space-y-6 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">
              Initialize Connection
            </h2>
            <p className="text-zinc-400">
              Secure channel open. Send payload below.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
