import type { Handler } from "@netlify/functions";
import { Resend } from "resend";
import { escapeHtml, isValidEmail, jsonHeaders } from "./_shared";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: jsonHeaders, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let email: unknown;
  try {
    ({ email } = JSON.parse(event.body || "{}"));
  } catch {
    return { statusCode: 400, headers: jsonHeaders, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  if (!isValidEmail(email)) {
    return { statusCode: 400, headers: jsonHeaders, body: JSON.stringify({ error: "A valid email is required" }) };
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Beldium <onboarding@resend.dev>",
      to: process.env.WAITLIST_TO_EMAIL || "davidobi@beldium.com",
      replyTo: email,
      subject: "New Beldium app waitlist signup",
      html: `<p>New waitlist signup:</p><p><strong>${escapeHtml(email)}</strong></p>`,
    });

    return { statusCode: 200, headers: jsonHeaders, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("Resend waitlist error:", error);
    return { statusCode: 502, headers: jsonHeaders, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};
