import { ContactMessage } from "@jaspercode/shared";

export type ScaffoldedContactMessage = {
  subject: string;
  text: string;
  html: string;
};

export function scaffoldContactMessage({
  name,
  email,
  message,
}: ContactMessage): ScaffoldedContactMessage {
  const subject = `[Contact] ${name}`;

  const text = [
    `A new message has been submitted via the contact form of jaspercode.com.`,
    ``,
    `From: ${name} <${email}>`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <div style="font-family: sans-serif; line-height: 1.5; font-size: 14px;">
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `.trim();

  return { subject, text, html };
}
