"use client";

import { AppInput } from "./app-input";
import { AppTextarea } from "./app-textarea";
import { AppButton } from "@/components/ui/app-button";
import { Card } from "@/components/ui/card";
import { sendContactEmail } from "@/lib/send-contact-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactMessage, contactMessageSchema } from "@jaspercode/shared";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactMessage>({ resolver: zodResolver(contactMessageSchema) });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactMessage) => {
    try {
      setLoading(true);
      await sendContactEmail(data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <AppInput label="Name" {...register("name")} />
        <p>{errors.name?.message}</p>
        <AppInput label="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <AppTextarea label="Message" {...register("message")} />
        <p>{errors.message?.message}</p>
        <AppButton type="submit" size="large" variant="primary">
          {loading ? "Sending..." : "Send Message"}
        </AppButton>
        {success && (
          <p className="text-emerald-200">Message sent successfully!</p>
        )}
      </form>
    </Card>
  );
}
