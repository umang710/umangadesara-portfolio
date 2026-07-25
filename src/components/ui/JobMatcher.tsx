"use client";

import { useActionState, useRef } from "react";
import { useFormStatus } from "react-dom";
import { analyzeJobDescription } from "@/app/actions/match";
import { ScanSearch, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Analyzing Fit...
        </>
      ) : (
        <>
          <ScanSearch className="w-4 h-4" />
          Run Match Engine
        </>
      )}
    </button>
  );
}

export function JobMatcher() {
  const [state, formAction] = useActionState(analyzeJobDescription, null);
  const formRef = useRef<HTMLFormElement>(null);

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-500";
    if (score >= 50) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="p-6 bg-white/40 dark:bg-zinc-900/40 border border-brand-accent/20 rounded-xl backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100">
        <ScanSearch className="w-5 h-5 text-brand-accent" />
        <h3 className="text-lg font-bold">System Fit Analyzer</h3>
      </div>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        Recruiting? Paste a job description below. The engine will run semantic keyword analysis to calculate alignment with my engineering stack.
      </p>

      <form ref={formRef} action={formAction} className="space-y-4">
        <textarea
          name="jd"
          rows={3}
          required
          placeholder="Paste job description or requirements here..."
          className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-950/80 border border-brand-accent/20 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm resize-none transition-all"
        />
        
        {state?.error && (
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{state.error}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <SubmitButton />
          
          {state?.success && state.score !== undefined && (
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-right">
                <span className="block text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">Match Score</span>
                <span className={`text-2xl font-bold font-mono ${getScoreColor(state.score)}`}>
                  {state.score}%
                </span>
              </div>
            </div>
          )}
        </div>
      </form>

      {state?.success && state.matched && (
        <div className="mt-6 pt-5 border-t border-brand-accent/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3">
            VERIFIED STACK ALIGNMENT
          </span>
          <div className="flex flex-wrap gap-2">
            {state.matched.length > 0 ? (
              state.matched.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent border border-brand-accent/20 rounded-md text-xs font-semibold shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-sm text-zinc-500">No direct technical overlap detected in this description.</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}