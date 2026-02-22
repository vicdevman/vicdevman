import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// sanitize user input for safe HTML embedding
const escapeHtml = (unsafe = "") =>
  String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// Admin email template — styled to match site scheme (clean, minimal)
const getAdminEmailTemplate = (name, email, message) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New contact submission</title>
  </head>
  <body style="margin:0;padding:24px;background:#f8fafc;font-family:'satoshi-medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;color:#0a0a0a;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(10,10,10,0.06);">
            <tr>
              <td style="background:linear-gradient(90deg,#0b0b0b 0%, #191919 100%);padding:18px 24px;">
                <h2 style="margin:0;color:#ffffff;font-family:'satoshi-bold',sans-serif;font-size:18px;">New message from your portfolio</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px 0;color:#374151;font-size:15px;">You have a new message via the contact form. Details below:</p>

                <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin-top:12px;">
                  <tr>
                    <td style="padding:10px;border-radius:8px;background:#f1f5f9;color:#0f172a;font-size:14px;">
                      <strong style="display:block;margin-bottom:6px;color:#0b0b0b;">Name</strong>
                      <div>${safeName}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px;border-radius:8px;background:#f1f5f9;color:#0f172a;font-size:14px;margin-top:8px;">
                      <strong style="display:block;margin-bottom:6px;color:#0b0b0b;">Email</strong>
                      <div><a href="mailto:${safeEmail}" style="color:#0b72ff;text-decoration:none;">${safeEmail}</a></div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:16px;padding:16px;border-radius:8px;background:linear-gradient(180deg,#ffffff,#f8fafc);border:1px solid #eef2f7;color:#111827;">
                  <strong style="display:block;margin-bottom:8px;color:#0b0b0b;">Message</strong>
                  <div style="font-size:14px;line-height:1.6;color:#374151;">${safeMessage}</div>
                </div>

                <div style="margin-top:22px;display:flex;gap:10px;align-items:center;">
                  <a href="mailto:${safeEmail}" style="background:#0b0b0b;color:#fff;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;">Reply</a>
                  <span style="color:#6b7280;font-size:13px;">Received via your portfolio contact form</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#fbfdff;padding:14px 18px;color:#6b7280;font-size:13px;text-align:center;">
                <span>— Victor’s Portfolio</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

// Friendly confirmation email to the user
const getUserEmailTemplate = (name) => {
  const safeName = escapeHtml(name);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Thanks for reaching out</title>
  </head>
  <body style="margin:0;padding:24px;background:#f8fafc;font-family:'satoshi-medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;color:#0a0a0a;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(10,10,10,0.06);">
            <tr>
              <td style="padding:20px 24px;background:linear-gradient(90deg,#ffffff,#f8fafc);">
                <h2 style="margin:0;color:#0b0b0b;font-family:'satoshi-bold',sans-serif;font-size:20px;">Thanks, ${safeName} — I got your message</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;color:#374151;font-size:15px;">
                <p style="margin:0 0 12px 0;">Thanks for reaching out. I appreciate you taking the time to get in touch — I’ll review your message and respond as soon as possible.</p>
                <p style="margin:0 0 18px 0;color:#6b7280;font-size:14px;">In the meantime, you can browse recent work or reply to this email if you have extra details.</p>
                <a href="https://vicdevman.com/projects" style="display:inline-block;background:#0b0b0b;color:#fff;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;">View Projects</a>
              </td>
            </tr>
            <tr>
              <td style="background:#fbfdff;padding:14px 18px;color:#6b7280;font-size:13px;text-align:center;">
                <span>— Victor Adeiza</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: getAdminEmailTemplate(name, email, message),
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Victor Adeiza" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      html: getUserEmailTemplate(name),
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
