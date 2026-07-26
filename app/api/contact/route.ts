// Redeploy trigger: pick up RESEND_API_KEY added after the previous build.
import { NextResponse } from "next/server";
import { sendEmail, contactNotificationEmail, CONTACT_INBOX } from "../../../lib/email";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are all required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const sent = await sendEmail({
    to: CONTACT_INBOX,
    subject: `Flag Bands contact form: ${name}`,
    html: contactNotificationEmail({ name, email, message }),
    replyTo: email,
  });

  if (!sent) {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email hello@flagbands.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
