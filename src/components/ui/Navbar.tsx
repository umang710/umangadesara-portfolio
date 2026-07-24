import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
          <span className="font-semibold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
            Umang Adesara
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-zinc-100 transition-colors">
            Home
          </Link>
          <Link
            href="#projects"
            className="hover:text-zinc-100 transition-colors"
          >
            Live Deployments
          </Link>
          <Link
            href="/contact"
            className="hover:text-zinc-100 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
