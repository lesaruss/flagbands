/**
 * Email sending via Resend (https://resend.com).
 * Uses the REST API directly, no SDK, no extra dependencies.
 * Requires RESEND_API_KEY environment variable.
 *
 * Sends from the verified lesaruss.com domain (flagbands.com is not yet a
 * verified Resend sender), display name set to "Flag Bands" so recipients
 * can tell which brand the message is about.
 */

const FROM_ADDRESS = "Flag Bands <noreply@lesaruss.com>";
const RESEND_API = "https://api.resend.com/emails";
export const CONTACT_INBOX = "contact@lesaruss.com";

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set, email not sent");
    return false;
  }

  try {
    const res = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: [replyTo] } : {}),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return false;
    }
    return true;
  } catch (e) {
    console.error("Email send failed:", e);
    return false;
  }
}

export function contactNotificationEmail(fields: { name: string; email: string; message: string }): string {
  const { name, email, message } = fields;
  const escapedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f5f5;margin:0;padding:40px 20px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e8e8e8;">
    <div style="background:#5C3E94;padding:20px 28px;">
      <span style="font-size:16px;font-weight:800;color:#fff;letter-spacing:-0.01em;">Flag Bands</span>
      <span style="font-size:12px;font-weight:500;color:#e4dbf5;margin-left:10px;">New contact form submission</span>
    </div>
    <div style="padding:28px;">
      <p style="margin:0 0 6px;font-size:13px;color:#888;">From</p>
      <p style="margin:0 0 20px;font-size:15px;font-weight:700;color:#1a1a1a;">${name} &lt;${email}&gt;</p>
      <p style="margin:0 0 6px;font-size:13px;color:#888;">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.6;color:#1a1a1a;">${escapedMessage}</p>
    </div>
    <div style="padding:16px 28px;background:#f8f7fb;border-top:1px solid #eee;">
      <p style="margin:0;font-size:12px;color:#888;">Reply-to is set to the sender's email, you can hit reply directly.</p>
    </div>
  </div>
</body>
</html>`;
}
