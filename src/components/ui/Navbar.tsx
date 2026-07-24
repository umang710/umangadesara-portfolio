import Link from "next/link";
import { Terminal, Download } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F6E3E5]/80 backdrop-blur-md border-b border-[#BB528A]/20">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-[#BB528A] group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-zinc-900 tracking-tight transition-colors">
            Umang Adesara
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link
            href="/"
            className="hover:text-[#BB528A] transition-colors hidden sm:block"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#BB528A] transition-colors hidden sm:block"
          >
            Deployments
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#BB528A] transition-colors hidden sm:block"
          >
            Contact
          </Link>

          {/* Updated Resume Button with Download Attribute */}
          <a
            href="/Umang_Adesara_Resume.pdf"
            download="Umang_Adesara_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#BB528A] text-white hover:bg-[#a04575] shadow-sm transition-colors font-semibold ml-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
