import type { Handler } from "@netlify/functions";
import { Resend } from "resend";
import { escapeHtml, isValidEmail, jsonHeaders } from "./_shared";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: jsonHeaders, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers: jsonHeaders, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const { name, email, organization, inquiry, company, message } = body;

  if (typeof name !== "string" || !name.trim() || !isValidEmail(email) || typeof message !== "string" || !message.trim()) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Name, a valid email, and message are required" }),
    };
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

    return { statusCode: 200, headers: jsonHeaders, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("Resend contact error:", error);
    return { statusCode: 502, headers: jsonHeaders, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};
