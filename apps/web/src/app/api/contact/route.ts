import { scaffoldContactMessage } from "@/lib/scaffold-contact-message";
import { ContactMessage } from "@jaspercode/shared";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const payload: ContactMessage = await request.json();
    const { name, email, message } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const {
      EMAIL_HOST,
      EMAIL_PORT = "587",
      EMAIL_SECURE = "false",
      EMAIL_USERNAME,
      EMAIL_PASSWORD,
      EMAIL_FROM,
      EMAIL_CONTACT_TO,
    } = process.env;

    if (
      !EMAIL_HOST ||
      !EMAIL_USERNAME ||
      !EMAIL_PASSWORD ||
      !EMAIL_FROM ||
      !EMAIL_CONTACT_TO
    ) {
      return NextResponse.json(
        { error: "Email configuration incomplete" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_SECURE === "true",
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
    });

    const { subject, text, html } = scaffoldContactMessage({
      name,
      email,
      message,
    });

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_CONTACT_TO,
      subject,
      replyTo: email,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
