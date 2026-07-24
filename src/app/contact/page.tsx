import { ContactForm } from "@/components/ui/ContactForm";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Contact | Umang Adesara",
  description: "Secure communication channel.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <section className="space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Awaiting Input</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Initialize Connection
          </h1>
          <p className="text-zinc-400 max-w-md text-base leading-relaxed">
            Secure channel open. Send your project details or inquiries directly
            to my encrypted pipeline.
          </p>
        </div>

        <div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-950 shadow-2xl">
          <div className="bg-[#09090b] rounded-xl p-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
