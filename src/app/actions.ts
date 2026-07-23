"use server";

import { z } from "zod";

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
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    return { error: "Validation failed. Please check your inputs." };
  }

  console.log("New Lead Captured:", validatedData.data);
  return { success: "Message sent successfully!" };
}
