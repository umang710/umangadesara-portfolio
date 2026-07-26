import { ContactForm } from "@/components/ui/ContactForm";
import { Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact | Umang Adesara",
  description: "Secure communication channel.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 relative z-10">
      <Reveal>
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <Zap className="w-4 h-4 text-brand-accent" />
              <span>Awaiting Input</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Initialize Connection
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-base leading-relaxed">
              Secure channel open. Send your project details or inquiries
              directly to my encrypted pipeline.
            </p>
          </div>

          {/* Elevated Light/Dark Theme Wrapper */}
          <div className="p-1 rounded-2xl bg-gradient-to-b from-brand-accent/20 to-transparent shadow-lg transition-colors duration-300">
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-brand-accent/10 rounded-xl p-6 md:p-8 transition-colors duration-300">
              <ContactForm />
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
