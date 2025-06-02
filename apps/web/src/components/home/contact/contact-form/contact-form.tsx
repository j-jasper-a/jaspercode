"use client";

import { AppInput } from "./app-input";
import { AppTextarea } from "./app-textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sendContactEmail } from "@/lib/send-contact-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactMessage, contactMessageSchema } from "@jaspercode/shared";
import { Send as SendMessageIcon } from "lucide-react";
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
        <p className="text-xs text-destructive">{errors.name?.message}</p>
        <AppInput label="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <AppTextarea label="Message" {...register("message")} />
        <p>{errors.message?.message}</p>
        <Button type="submit" variant="default" size="default">
          {loading ? (
            <span className="animate-pulse">Sending message...</span>
          ) : (
            <span>Send message</span>
          )}
          <SendMessageIcon className="text-muted-foreground" />
        </Button>
        {success && (
          <p className="text-emerald-200">Message sent successfully!</p>
        )}
      </form>
    </Card>
  );
}
