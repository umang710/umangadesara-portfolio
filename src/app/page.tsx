import { Hero } from "@/components/sections/Hero";
import { StackAndPhilosophy } from "@/components/sections/StackAndPhilosophy";
import { SystemLog } from "@/components/sections/SystemLog";
import { Research } from "@/components/sections/Research";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-brand-accent/20 dark:selection:bg-brand-accent/40 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-32 relative z-10">
        <Hero />
        <StackAndPhilosophy />
        <SystemLog />
        <Research />
      </div>
    </main>
  );
}
