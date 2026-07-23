import { ContactForm } from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Umang Adesara
        </h1>
        <p className="text-zinc-500">
          Software Engineer &amp; Technical Founder
        </p>
      </div>

      <ContactForm />
    </main>
  );
}
