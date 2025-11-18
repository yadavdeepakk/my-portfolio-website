import { Request, Response } from "express";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function handleEmailSubmission(
  req: Request<unknown, unknown, ContactFormData>,
  res: Response,
) {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, message",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
      });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not set");
      return res.status(500).json({
        success: false,
        error: "Email service is not configured",
      });
    }

    // Send email via Brevo API
    const recipientEmail = "yadavdeepakk9212@gmail..com";

    const emailPayload = {
      sender: {
        name: name,
        email: email,
      },
      to: [
        {
          email: recipientEmail,
          name: "Deepak Kumar Yadav",
        },
      ],
      subject: `New Portfolio Message from ${name}`,
      htmlContent: `
        <html>
          <head></head>
          <body>
            <h2>New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>This email was sent via your portfolio contact form</small></p>
          </body>
        </html>
      `,
      textContent: `
        New Message from Portfolio

        Name: ${name}
        Email: ${email}

        Message:
        ${message}

        ---
        This email was sent via your portfolio contact form
      `,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return res.status(500).json({
        success: false,
        error: "Failed to send email",
      });
    }

    const data = await response.json();
    console.log("Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email submission error:", error);
    return res.status(500).json({
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
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
