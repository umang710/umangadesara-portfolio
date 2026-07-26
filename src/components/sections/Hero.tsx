"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Mail } from "lucide-react";
import { IntroVideo } from "@/components/ui/IntroVideo";

export function Hero() {
  return (
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
          Software Engineer. Architecting scalable, full-stack systems and
          AI-driven solutions from the edge to the database.
        </p>
      </div>

      {/* CINEMATIC INTRO VIDEO */}
      <section className="pt-8 pb-12 w-full">
        <IntroVideo />
      </section>

      <div className="flex items-center gap-4 pt-2">
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="group block p-3 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-brand-accent/20 rounded-lg hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/40 transition-all duration-300 shadow-sm"
          >
            <FaGithub className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors" />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://linkedin.com/in/umangadesara710"
            target="_blank"
            rel="noreferrer"
            className="group block p-3 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-brand-accent/20 rounded-lg hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/40 transition-all duration-300 shadow-sm"
          >
            <FaLinkedin className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="group block p-3 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-brand-accent/20 rounded-lg hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/40 transition-all duration-300 shadow-sm"
          >
            <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
