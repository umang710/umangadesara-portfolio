"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { Loader2, Send } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3.5 px-6 bg-[#BB528A] hover:bg-[#a04575] text-white font-semibold rounded-lg transition-all duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Transmitting...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Transmit Data
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-6 bg-transparent"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-800 mb-1.5"
          >
            System ID / Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 bg-white/80 border border-[#BB528A]/20 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#BB528A]/50 focus:border-transparent transition-all shadow-sm"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-800 mb-1.5"
          >
            Return Address / Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-white/80 border border-[#BB528A]/20 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#BB528A]/50 focus:border-transparent transition-all shadow-sm"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-800 mb-1.5"
          >
            Payload / Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-white/80 border border-[#BB528A]/20 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#BB528A]/50 focus:border-transparent transition-all shadow-sm resize-none"
            placeholder="Let's build something..."
          />
        </div>
      </div>

      {state?.error && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
          {state.error}
        </div>
      )}

      {state?.success && (
        <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm">
          {state.success}
        </div>
      )}

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
