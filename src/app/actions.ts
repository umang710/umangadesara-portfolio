"use server";

import { z } from "zod";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

import { headers } from "next/headers";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormState = {
  success?: string;
  error?: string;
} | null;

// Simple in-memory rate limiting (Note: In a distributed serverless environment,
// this is per-instance, but it still provides a solid baseline shield against bursts)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const MAX_REQUESTS = 3; // Max 3 emails
const WINDOW_MS = 60 * 60 * 1000; // per 1 hour

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  // --- RATE LIMITING CHECK ---
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const userLimit = rateLimitMap.get(ip);

    if (userLimit && now - userLimit.timestamp < WINDOW_MS) {
      if (userLimit.count >= MAX_REQUESTS) {
        return { error: "Too many requests. Please try again later." };
      }
      userLimit.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }
  } catch (e) {
    // Failsafe: if headers() fails in a specific edge runtime, just continue
  }
  // ---------------------------
  // 1. Initialize services INSIDE the execution block
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    // Extract the very first error message Zod caught
    const errorMessage = validatedData.error.issues[0].message;
    return { error: errorMessage };
  }

  const { name, email, message } = validatedData.data;

  try {
    const { error: dbError } = await supabase
      .from("leads")
      .insert([{ name, email, message }]);

    if (dbError)
      throw new Error(`Database insertion failed: ${dbError.message}`);

    // 2. Fire the email notification via Resend
    const { error: emailError } = await resend.emails.send({
      from: "onboarding@resend.dev", // This MUST stay onboarding@resend.dev for now
      to: "adesaraumang@gmail.com", // This MUST be your exact registered email
      subject: `New Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (emailError)
      throw new Error(`Email dispatch failed: ${emailError.message}`);

    return { success: "Message securely transmitted." };
  } catch (error) {
    console.error("Pipeline Error:", error);
    return { error: "System error. Please try again later." };
  }
}
