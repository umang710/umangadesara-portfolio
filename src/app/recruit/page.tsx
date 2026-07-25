import { JobMatcher } from "@/components/ui/JobMatcher";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Recruit Me | Umang Adesara",
  description: "AI-driven system fit and technical stack alignment analyzer.",
};

export default function RecruitPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <section className="space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>AI Verification Engine</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            Evaluate System Fit
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-base leading-relaxed transition-colors duration-300">
            Evaluating my background for an engineering role? Paste your job description below to run an automated semantic analysis against my verified stack and core competencies.
          </p>
        </div>

        {/* Elevated Wrapper matching your contact page styling */}
        <div className="p-1 rounded-2xl bg-gradient-to-b from-brand-accent/20 to-transparent shadow-lg transition-colors duration-300">
          <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/10 rounded-xl p-6 md:p-8 transition-colors duration-300">
            <JobMatcher />
          </div>
        </div>
      </section>
    </main>
  );
}