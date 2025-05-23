import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface MailOPtionInterface {
  from: {
    name: string;
    address: string;
  };
  to: string;
  subject: string;
  html: string;
}

// Handle OPTIONS preflight requests
export const OPTIONS = async () => {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://www.3pcon.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
      "Vary": "Origin", // Helps caching
    },
  });
};

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // false for 587, true for 465
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Handle POST request to send the email
export const POST = async (request: NextRequest) => {
  try {
    const { name, email, phone, subject, message, company } =
      await request.json();

    const senderEmail = process.env.EMAIL || "";

    const mailOptions: MailOPtionInterface = {
      from: {
        name: "3pcon Contact System",
        address: senderEmail,
      },
      to: "ayomikunomotosho@gmail.com", // Replace with your target email
      subject: `${name} message from 3pcon`,
      html: `
        <p>Hello,</p>
        <p>You have received a new message through your website contact form.</p><br />
        <b>Details: </b>
        <p><b>Name: </b> ${name}</p>
        <p><b>Email: </b> ${email}</p>
        <p><b>Phone Number: </b> ${phone}</p>
        <p><b>Company Name: </b> ${company}</p>
        <p><b>Subject: </b> ${subject}</p>
        <p><b>Message: </b> ${message}</p><br />
        <p>Please respond as soon as possible</p><br />
        <p>Best regards,</p>
        <p>3pcon Contact System</p><br />
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://www.3pcon.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true",
          "Vary": "Origin",
        },
      }
    );
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : "Unexpected error occurred";

    return NextResponse.json(
      { message: errorMsg },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://www.3pcon.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true",
          "Vary": "Origin",
        },
      }
    );
  }
};
