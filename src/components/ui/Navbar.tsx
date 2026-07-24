"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Download, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F6E3E5]/80 backdrop-blur-md border-b border-[#BB528A]/20">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <Terminal className="w-5 h-5 text-[#BB528A] group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-zinc-900 tracking-tight transition-colors">
            Umang Adesara
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-[#BB528A] transition-colors">
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#BB528A] transition-colors"
          >
            Deployments
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#BB528A] transition-colors"
          >
            Contact
          </Link>

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

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:hidden">
          <a
            href="/Umang_Adesara_Resume.pdf"
            download="Umang_Adesara_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#BB528A] text-white hover:bg-[#a04575] text-xs font-semibold shadow-sm transition-colors"
          >
            <Download className="w-3 h-3" />
            Resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/60 border border-[#BB528A]/20 text-zinc-800 hover:text-[#BB528A] focus:outline-none transition-colors shadow-sm"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-[#F6E3E5]/95 backdrop-blur-md border-b border-[#BB528A]/20 px-6 py-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-[#BB528A] transition-colors py-2 border-b border-[#BB528A]/10"
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-[#BB528A] transition-colors py-2 border-b border-[#BB528A]/10"
          >
            Deployments
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-[#BB528A] transition-colors py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
