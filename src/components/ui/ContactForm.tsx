"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null,
  );

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Let&apos;s Build</CardTitle>
        <CardDescription>
          Drop your details and let&apos;s discuss your next project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Input
              name="name"
              placeholder="Name"
              required
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="How can I help?"
              required
              disabled={isPending}
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-500">{state.error}</p>
          )}
          {state?.success && (
            <p className="text-sm text-green-500">{state.success}</p>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
