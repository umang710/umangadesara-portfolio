import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#BB528A]/20 bg-transparent mt-24 relative z-20">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BB528A] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#BB528A]">
              All systems operational
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} Umang Adesara. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-500 hover:text-[#BB528A] transition-colors mr-2"
          >
            Initialize Connection
          </Link>
          <div className="w-px h-4 bg-[#BB528A]/20"></div>
          <a
            href="https://github.com/umang710"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-[#BB528A] transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/umangadesara710"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-[#BB528A] transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-5 h-5" />
          </a>
          <Link
            href="/contact"
            className="text-zinc-500 hover:text-[#BB528A] transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
