import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { escapeHtml, isValidEmail } from "./_shared.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body ?? {};

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "A valid email is required" });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Beldium <onboarding@resend.dev>",
      to: process.env.WAITLIST_TO_EMAIL || "davidobi@beldium.com",
      replyTo: email,
      subject: "New Beldium app waitlist signup",
      html: `<p>New waitlist signup:</p><p><strong>${escapeHtml(email)}</strong></p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend waitlist error:", error);
    return res.status(502).json({ error: "Failed to send email" });
  }
}
