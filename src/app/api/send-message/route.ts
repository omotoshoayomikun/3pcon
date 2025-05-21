import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export interface MailOPtionInterface {
    from: {
        name: string;
        address: string;
    },
    to: string;
    subject: string;
    html: string;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
});

export const POST = async(request: NextRequest) => {
    const { name, email, phone, subject, message } = await request.json()
    let senderEmail = "";
    if(process.env.EMAIL) senderEmail = process.env.EMAIL
    try {
        const mailOptions: MailOPtionInterface = {
            from: {
              name: "3pcon Contact System",
              address: senderEmail,
            },
            to: "ayomikunomotosho@gmail.com",
            subject: `${name} message from 3pcon`,
            html: `
                <p>Hello,</p>
                <p>You have received a new message through your website contact form.</p><br />
                <b>Details: </b>
                <p><b>Name: </b> ${name}</p>
                <p><b>Email: </b> ${email}</p>
                <p><b>Phone Number: </b> ${phone}</p>
                <p><b>Subject: </b> ${subject}</p>
                <p><b>Message: </b> ${message}</p> <br />
                <p>Please respond as soon as possible</p> <br />
                <p>Best regards,</p>
                <p>3pcon Contact System</p> <br />
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully" }, {status: 200})

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err);
            return NextResponse.json({ message: err.message }, { status: 400 });
        }
        console.log("Unexpected error", err);
        return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
    }
}