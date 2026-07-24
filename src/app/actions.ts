"use server";

import { z } from "zod";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormState = {
  success?: string;
  error?: string;
} | null;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
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
    return { error: "Validation failed. Please check your inputs." };
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
