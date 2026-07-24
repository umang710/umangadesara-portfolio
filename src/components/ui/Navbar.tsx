"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@teispace/next-themes";
import { Terminal, Download, Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch by mounting theme toggle after client loads
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-light/80 dark:bg-background/80 backdrop-blur-md border-b border-brand-accent/20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <Terminal className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">
            Umang Adesara
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
            Deployments
          </Link>
          <Link href="/architecture" className="hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
            Architecture
          </Link>
          <Link href="/contact" className="hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
            Contact
          </Link>
          
          {/* Theme Toggle (Desktop) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-brand-accent dark:hover:text-brand-accent"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <a 
            href="/Umang_Adesara_Resume.pdf" 
            download="Umang_Adesara_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-accent text-white hover:bg-brand-accent-hover shadow-sm transition-colors font-semibold ml-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button Area */}
        <div className="flex items-center gap-3 sm:hidden">
          
          {/* Theme Toggle (Mobile) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <a 
            href="/Umang_Adesara_Resume.pdf" 
            download="Umang_Adesara_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-brand-accent text-white hover:bg-brand-accent-hover text-xs font-semibold shadow-sm transition-colors"
          >
            <Download className="w-3 h-3" />
            Resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/60 dark:bg-zinc-900/60 border border-brand-accent/20 text-zinc-800 dark:text-zinc-200 hover:text-brand-accent dark:hover:text-brand-accent focus:outline-none transition-colors shadow-sm"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-brand-light/95 dark:bg-background/95 backdrop-blur-md border-b border-brand-accent/20 px-6 py-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-brand-accent dark:hover:text-brand-accent transition-colors py-2 border-b border-brand-accent/10"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-brand-accent dark:hover:text-brand-accent transition-colors py-2 border-b border-brand-accent/10"
          >
            Deployments
          </Link>
          <Link 
            href="/architecture" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-brand-accent dark:hover:text-brand-accent transition-colors py-2 border-b border-brand-accent/10"
          >
            Architecture
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-brand-accent dark:hover:text-brand-accent transition-colors py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}