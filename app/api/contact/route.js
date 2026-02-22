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

<body
  style="
 margin:0;
    padding:0px;
    background:#f8fafc;
    font-family:'satoshi-medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    color:#0a0a0a;
  "
>
  <table  width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center">

        <!-- Card -->
        <table
          width="600"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 10px 30px rgba(0,0,0,0.06);
          "
        >

          <!-- Header -->
          <tr>
            <td style="padding:24px;background:#f8fafc;">
              <h2
                style="
                  margin:0;
                  font-family:'satoshi-bold',sans-serif;
                  font-size:20px;
                "
              >
                New message from your portfolio
              </h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:26px">

              <p style="margin:0 0 16px 0; font-size:15px; color:#374151;">
                A visitor just submitted the contact form.
              </p>

              <!-- Info blocks -->
              <table width="100%" role="presentation">
                <tr>
                  <td
                    style="
                      padding:14px;
                      border-radius:10px;
                      background:#f1f5f9;
                      font-size:14px;
                    "
                  >
                    <strong style="display:block;margin-bottom:6px;">Name</strong>
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td height="10"></td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:14px;
                      border-radius:10px;
                      background:#f1f5f9;
                      font-size:14px;
                    "
                  >
                    <strong style="display:block;margin-bottom:6px;">Email</strong>
                    <a href="mailto:${safeEmail}" style="color:#0b72ff;text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div
                style="
                  margin-top:18px;
                  padding:16px;
                  border-radius:10px;
                  background:#ffffff;
                  border:1px solid #eef2f7;
                  font-size:14px;
                  line-height:1.6;
                "
              >
                <strong style="display:block;margin-bottom:8px;">Message</strong>
                ${safeMessage}
              </div>

              <!-- CTA -->
              <div style="margin-top:22px;">
                <a
                  href="mailto:${safeEmail}"
                  style="
                    display:inline-block;
                    background:#0b0b0b;
                    color:#ffffff;
                    padding:10px 16px;
                    border-radius:10px;
                    text-decoration:none;
                    font-weight:600;
                  "
                >
                  Reply
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background:#fbfdff;
                padding:14px;
                text-align:center;
                font-size:13px;
                color:#6b7280;
              "
            >
              Victor's Portfolio
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

<body
  style="
    margin:0;
    padding:0px;
    background:#f8fafc;
    font-family:'satoshi-medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    color:#0a0a0a;
  "
>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center">

        <table
          width="600"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 10px 30px rgba(0,0,0,0.06);
          "
        >

          <!-- Header -->
          <tr>
            <td style="padding:24px;background:#f8fafc;">
              <h2
                style="
                  margin:0;
                  font-family:'satoshi-bold',sans-serif;
                  font-size:20px;
                "
              >
                Thanks ${safeName}, message received
              </h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px;font-size:15px;color:#374151;">

              <p style="margin:0 0 14px 0;">
                I appreciate you reaching out. I will review your message and reply soon.
              </p>

              <p style="margin:0 0 20px 0;font-size:14px;color:#6b7280;">
                If you have more details to add, you can simply reply to this email.
              </p>

              <a
                href="https://vicdevman.dev/projects"
                style="
                  display:inline-block;
                  background:#0b0b0b;
                  color:#ffffff;
                  padding:10px 16px;
                  border-radius:10px;
                  text-decoration:none;
                  font-weight:600;
                "
              >
                View Projects
              </a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background:#fbfdff;
                padding:14px;
                text-align:center;
                font-size:13px;
                color:#6b7280;
              "
            >
              Victor Adeiza
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
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
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
      subject: "Thanks for reaching out!",
      html: getUserEmailTemplate(name),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
