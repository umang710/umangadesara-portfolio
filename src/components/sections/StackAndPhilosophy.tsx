import { Cpu } from "lucide-react";

export function StackAndPhilosophy() {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out fill-mode-both">
      <div className="flex items-center gap-3 border-b border-brand-accent/20 pb-4 transition-colors duration-300">
        <div className="p-2 bg-white/60 dark:bg-zinc-900/60 rounded-md border border-brand-accent/20 shadow-sm transition-colors duration-300">
          <Cpu className="w-4 h-4 text-brand-accent" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          Core Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
            The Philosophy
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify transition-colors duration-300">
            I build high-performance web applications that bridge the gap
            between scalable full-stack engineering and Artificial Intelligence.
            Specializing in edge computing, secure architectures, and deploying
            production-ready AI models to create seamless user experiences.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "TypeScript",
            "Next.js",
            "Node.js",
            "Java",
            "AWS",
            "Docker",
            "Redis",
            "Python",
            "PyTorch",
            "Scikit-Learn",
            "LangChain",
            "FAISS",
          ].map((tech) => (
            <div
              key={tech}
              className="px-4 py-3 rounded-lg border border-brand-accent/20 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-zinc-800 hover:border-brand-accent/50 hover:text-brand-accent dark:hover:text-brand-accent text-zinc-700 dark:text-zinc-300 transition-all cursor-default hover:-translate-y-1 duration-300 shadow-sm"
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
