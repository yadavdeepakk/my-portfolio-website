import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

let transporter: nodemailer.Transporter | null = null;

function initializeTransporter() {
  if (transporter) return transporter;

  const gmailUser = process.env.GMAIL_USER;
  let gmailPassword = process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    throw new Error("Gmail credentials not configured");
  }

  // Remove spaces from Gmail App Password (they're just for readability)
  gmailPassword = gmailPassword.replace(/\s/g, "");

  console.log(`Initializing Gmail transporter for: ${gmailUser}`);

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  return transporter;
}

export async function handleEmailSubmission(
  req: Request<unknown, unknown, ContactFormData>,
  res: Response,
) {
  try {
    const { name, email, message } = req.body;

    console.log(`Received contact form submission from: ${email}`);

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, message",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
      });
    }

    const transport = initializeTransporter();
    const gmailUser = process.env.GMAIL_USER;

    console.log(`Attempting to send email to: ${gmailUser}`);

    // Send email via Gmail SMTP
    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f0f0f0; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .content { line-height: 1.6; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Message from Portfolio</h2>
              </div>
              <div class="content">
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
              </div>
              <div class="footer">
                <p>This email was sent via your portfolio contact form</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Message from Portfolio

        Name: ${name}
        Email: ${email}

        Message:
        ${message}

        ---
        This email was sent via your portfolio contact form
      `,
      replyTo: email,
    };

    await transport.sendMail(mailOptions);
    console.log(`Email sent successfully to ${gmailUser} from ${email}`);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email submission error:", error);
    return res.status(500).json({
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to send email. Please try again later.",
    });
  }
}

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
