import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { escapeHtml, isValidEmail } from "./_shared.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, organization, inquiry, company, message } = req.body ?? {};

  if (
    typeof name !== "string" || !name.trim() ||
    !isValidEmail(email) ||
    typeof message !== "string" || !message.trim()
  ) {
    return res.status(400).json({ error: "Name, a valid email, and message are required" });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Beldium <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "davidobi@beldium.com",
      replyTo: email,
      subject: `New contact inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${organization ? `<p><strong>Organization Type:</strong> ${escapeHtml(String(organization))}</p>` : ""}
        ${inquiry ? `<p><strong>Inquiry Type:</strong> ${escapeHtml(String(inquiry))}</p>` : ""}
        ${company ? `<p><strong>Organization Name:</strong> ${escapeHtml(String(company))}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend contact error:", error);
    return res.status(502).json({ error: "Failed to send email" });
  }
}
