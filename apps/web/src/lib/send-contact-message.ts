import { ContactMessage } from "@jaspercode/schemas";

export async function sendContactEmail(payload: ContactMessage): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const { error } = await response.json().catch(() => ({}));
    throw new Error(
      error ?? `Failed to send contact email (status ${response.status})`,
    );
  }
}
