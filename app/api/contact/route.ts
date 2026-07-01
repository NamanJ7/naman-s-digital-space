import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/site.config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  // When email delivery is not configured, open a fully addressed draft in
  // the visitor's mail app instead of claiming a message was delivered.
  if (!apiKey) {
    const subject = encodeURIComponent(`Website message from ${name}`);
    const text = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    return NextResponse.json({
      ok: true,
      delivered: false,
      mailto: `mailto:${siteConfig.email}?subject=${subject}&body=${text}`,
    });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Website Contact <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
