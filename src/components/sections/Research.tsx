import { Network } from "lucide-react";

export function Research() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 border-b border-brand-accent/20 pb-4 transition-colors duration-300">
        <div className="p-2 bg-white/60 dark:bg-zinc-900/60 rounded-md border border-brand-accent/20 shadow-sm transition-colors duration-300">
          <Network className="w-4 h-4 text-brand-accent" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          Research Paper
        </h2>
      </div>

      <div className="p-6 border border-brand-accent/20 rounded-xl bg-white/40 dark:bg-zinc-900/40 hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-all duration-300 backdrop-blur-sm shadow-md">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg flex items-center gap-2 transition-colors duration-300">
            Stock Price Trend Analysis
          </h3>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 text-justify transition-colors duration-300">
          Conducted quantitative research on market movement patterns,
          implementing LSTM-based predictive modeling to forecast trends with an
          85% accuracy rate.
        </p>
        <div className="flex gap-2 font-mono text-xs">
          <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm transition-colors duration-300">
            TensorFlow
          </span>
          <span className="bg-white dark:bg-zinc-950 border border-brand-accent/30 text-brand-accent px-2.5 py-1 rounded-md shadow-sm transition-colors duration-300">
            Python
          </span>
        </div>
      </div>
    </section>
  );
}
