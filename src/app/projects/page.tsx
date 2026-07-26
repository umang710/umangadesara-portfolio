import { Terminal, ExternalLink, Hammer } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata = {
  title: "Projects",
  description: "Live deployments and technical architecture.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative z-10">
      <Reveal>
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

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {/* Project 1: Autonomous AI Control Plane */}
            <SpotlightCard className="group p-6 md:col-span-2 flex flex-col h-full hover:border-brand-accent/50 transition-colors duration-300">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    Autonomous AI Control Plane
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    An intelligent, self-healing system simulator that uses
                    predictive algorithms and AI to autonomously manage queue
                    capacities, detect anomalies, and auto-scale infrastructure
                    based on simulated traffic spikes.
                  </p>
                </div>

                <div className="flex flex-col mt-auto pt-4 border-t border-brand-accent/10 gap-4">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Python
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Docker
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Redis
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Pandas
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Streamlit
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://autonomous-ai-control-plane.up.railway.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-1.5 text-xs font-medium text-brand-accent bg-brand-accent/10 hover:bg-brand-accent hover:text-white rounded-md transition-colors duration-75"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/umang710/autonomous-ai-control-plane"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors duration-75"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Project 2: Academic Intelligence Assistant */}
            <SpotlightCard className="group p-6 flex flex-col h-full hover:border-brand-accent/50 transition-colors duration-300">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    Academic Intelligence Assistant
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    Context-aware RAG academic assistant built on Groq LPUs for
                    zero-latency inference. Features a custom intent router,
                    local FAISS vector search, and live web fallback.
                  </p>
                </div>

                <div className="flex flex-col mt-auto pt-4 border-t border-brand-accent/10 gap-4">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Groq LPU
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      LangChain
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      RAG
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      FAISS
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://academicchatbotumang.streamlit.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-1.5 text-xs font-medium text-brand-accent bg-brand-accent/10 hover:bg-brand-accent hover:text-white rounded-md transition-colors duration-75"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/umang710/Academic_chatbot"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors duration-75"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Project 3: SEO Content Quality Detector */}
            <SpotlightCard className="group p-6 flex flex-col h-full hover:border-brand-accent/50 transition-colors duration-300">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    SEO Content Quality Detector
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    ML-powered web application that analyzes URLs to predict SEO
                    content quality using a trained Random Forest model and
                    BeautifulSoup text extraction.
                  </p>
                </div>

                <div className="flex flex-col mt-auto pt-4 border-t border-brand-accent/10 gap-4">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Scikit-Learn
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      NLTK
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      BeautifulSoup
                    </span>
                    <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm">
                      Python
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://seo-content-detector-umang710.streamlit.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-1.5 text-xs font-medium text-brand-accent bg-brand-accent/10 hover:bg-brand-accent hover:text-white rounded-md transition-colors duration-75"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/umang710/seo-content-detector"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors duration-75"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
