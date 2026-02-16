import { NextRequest, NextResponse } from "next/server";
import { MailOPtionInterface } from "../../../../utils/types";
import { CreateTransporter } from "../../../../config/CreateTransporter";


// Handle OPTIONS preflight requests
export const OPTIONS = async () => {
  return new NextResponse(null, {
    status: 204
  });
};

// Setup Nodemailer transporter
const transporter = CreateTransporter();

// Handle POST request to send the email
export const POST = async (request: NextRequest) => {
  try {
    const { name, email, phone, subject, message, company } =
      await request.json();

    const senderEmail = process.env.TRANSPORTER_EMAIL || "";

    // build a clear subject line
    const emailSubject = subject
      ? `[3pcon Contact] ${subject} — ${name}`
      : `[3pcon Contact] Message from ${name}`;

    // generate a timestamp in Lagos timezone for record in the email body
    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Africa/Lagos",
      hour12: false,
    });

    const mailOptions: MailOPtionInterface = {
      from: {
        name: "3pcon Contact System",
        address: senderEmail,
      },
      to: senderEmail, // Replace with your target email
      replyTo: email || undefined,
      subject: emailSubject,
      text: `
You have received a new message via 3pcon website contact form.

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Subject: ${subject || "N/A"}
Message:
${message}

Received: ${timestamp} (Africa/Lagos)

Visit https://www.3pcon.com to view more details.
      `.trim(),
      html: `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; margin:0; padding:0; background:#f4f6f8;">
    <table role="presentation" width="100%" style="max-width:680px; margin:24px auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 6px 18px rgba(16,24,40,0.08);">
      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #eef2f6;">
          <!-- Header: optional logo or company name -->
          <div style="display:flex; align-items:center; gap:12px;">
            <!-- If you host a logo, replace the URL below; otherwise the company name is shown -->
            <img src="https://www.3pcon.com/images/logo_2.svg" alt="3pcon logo" style="height:40px; width:auto; object-fit:contain;" onerror="this.style.display='none'"/>
            <h2 style="margin:0; font-size:18px; color:#0f172a;">3pcon — New Contact Message</h2>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 24px;">
          <p style="margin:0 0 12px 0; color:#334155;">Hello,</p>

          <p style="margin:0 0 16px 0; color:#334155;">
            You've received a new message from the 3pcon website contact form. Details are below.
          </p>

          <table role="presentation" width="100%" style="border-collapse:collapse; margin-top:8px;">
            <tr>
              <td style="padding:8px 0; vertical-align:top; width:140px; color:#475569;"><strong>Name</strong></td>
              <td style="padding:8px 0; color:#0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; vertical-align:top; color:#475569;"><strong>Email</strong></td>
              <td style="padding:8px 0; color:#0f172a;"><a href="mailto:${email}" style="color:inherit; text-decoration:underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0; vertical-align:top; color:#475569;"><strong>Phone</strong></td>
              <td style="padding:8px 0; color:#0f172a;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; vertical-align:top; color:#475569;"><strong>Company</strong></td>
              <td style="padding:8px 0; color:#0f172a;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; vertical-align:top; color:#475569;"><strong>Subject</strong></td>
              <td style="padding:8px 0; color:#0f172a;">${subject || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; vertical-align:top; color:#475569;"><strong>Message</strong></td>
              <td style="padding:8px 0; color:#0f172a; white-space:pre-wrap;">${message || "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; vertical-align:top; color:#475569;"><strong>Received</strong></td>
              <td style="padding:8px 0; color:#0f172a;">${timestamp} (Africa/Lagos)</td>
            </tr>
          </table>

          <p style="margin:18px 0 0 0; color:#334155;">
            Please respond to the sender as appropriate. You can reply directly to this email (Reply-To is set to the sender's address).
          </p>

          <div style="margin-top:20px; padding-top:16px; border-top:1px solid #eef2f6; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <p style="margin:0; font-weight:600; color:#0f172a;">3pcon</p>
              <p style="margin:2px 0 0 0; font-size:13px; color:#64748b;">Innovative tech solutions • <a href="https://www.3pcon.com" style="color:inherit; text-decoration:underline;">3pcon.com</a></p>
            </div>
            <div style="font-size:12px; color:#94a3b8;">
              <small>Contact System</small>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
      }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";

    return NextResponse.json( { message: errorMsg },{status: 500,});
  }
};
