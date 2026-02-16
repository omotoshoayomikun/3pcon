import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/User";
import Event from "../../../../models/Event"; // Imported to get the Event Title
import dbConnect from "../../../../lib/dbConnect";
import { UserFilter } from "../../../../utils/types";
import { CreateTransporter } from "../../../../config/CreateTransporter";

export const POST = async (request: NextRequest) => {
    try {
        await dbConnect();
        const body = await request.json();
        const { firstname, lastname, email, phone, source, eventId } = body;

        // 1. Check if user already registered FOR THIS SPECIFIC EVENT
        // We check (email OR phone) AND eventId
        const existingRegistration = await User.findOne({
            $and: [
                { $or: [{ email }, { phone }] },
                { eventId: eventId }
            ]
        });

        if (existingRegistration) {
            return NextResponse.json(
                { message: "You have already registered for this specific event." }, 
                { status: 400 }
            );
        }

        // 2. Get the Event details to use the real title in the email
        const eventDetails = await Event.findById(eventId);
        const webinarTitle = eventDetails?.title;

        // 3. Save the new registration (User)
        const newUser = new User({
            firstname,
            lastname,
            email,
            phone,
            source,
            eventId // Ensure your User model has this field
        });

        const saveUser = await newUser.save();

        // 4. Email Setup
        const senderEmail = process.env.TRANSPORTER_EMAIL || "";
        const timestamp = new Date().toLocaleString("en-GB", {
            timeZone: "Africa/Lagos",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        const mailOptions = {
            from: {
                name: "3pcon Webinar Team",
                address: senderEmail,
            },
            to: email,
            subject: `Registration Confirmed: ${webinarTitle}`,
            html: generateWebinarEmailHtml(firstname, timestamp, webinarTitle),
        };

        const transporter = CreateTransporter();
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ 
            message: "Registered for webinar successful", 
            data: saveUser 
        }, { status: 200 });

    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";
        return NextResponse.json({ message: errorMsg }, { status: 500 });
    }
}

export const GET = async (request: NextRequest) => {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);

        const q = searchParams.get("q");
        const from = searchParams.get("from");
        const to = searchParams.get("to");
        const status = searchParams.get("status");
        const eventId = searchParams.get("eventId"); // New filter
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");

        const filter: UserFilter = {};

        if (from || to) {
            filter.createdAt = {};
            if (from) filter.createdAt.$gte = new Date(from);
            if (to) filter.createdAt.$lte = new Date(to);
        }

        if (q) {
            filter.$or = [
                { 'firstname': { $regex: q, $options: 'i' } },
                { 'lastname': { $regex: q, $options: 'i' } },
                { 'phone': { $regex: q, $options: 'i' } },
                { 'email': { $regex: q, $options: 'i' } },
            ];
        }

        if (status) filter.status = status;
        if (eventId) filter.eventId = eventId; // Filter by specific event

        const skip = (page - 1) * limit;

        const [users, total] = await Promise.all([
            User.find(filter)
                .skip(skip)
                .limit(limit)
                .populate("eventId", "title") // Changed from category to eventId
                .sort({ createdAt: -1 })
                .lean(),
            User.countDocuments(filter)
        ]);

        return NextResponse.json({
            success: true,
            data: users,
            pagination: {
                total,
                page,
                pages: Math.ceil(total / limit)
            }
        }, { status: 200 });

    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";
        return NextResponse.json({ message: errorMsg }, { status: 500 });
    }
}

// Updated Email Template to accept the dynamic title
const generateWebinarEmailHtml = (name: string, date: string, topic: string) => `
<!doctype html>
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
    <table width="100%" style="max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
      <tr style="background: #0f172a; color: #ffffff; text-align: center;">
        <td style="padding: 20px;">
          <h1 style="margin: 0; font-size: 24px;">Registration Confirmed!</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px;">
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thank you for registering for our upcoming webinar. We are excited to have you join us!</p>
          
          <div style="background: #f8fafc; border-left: 4px solid #0f172a; padding: 15px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Topic:</strong> ${topic}</p>
            <p style="margin: 5px 0 0 0;"><strong>Registration Date:</strong> ${date} (WAT)</p>
          </div>

          <p>You will receive another email shortly with the meeting link and instructions on how to join the session.</p>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://www.3pcon.com" style="background: #0f172a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Website</a>
          </div>
        </td>
      </tr>
      <tr style="background: #f1f5f9; text-align: center; font-size: 12px; color: #64748b;">
        <td style="padding: 20px;">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} 3pcon. All rights reserved.</p>
          <p style="margin: 5px 0 0 0;">Innovative tech solutions for the modern world.</p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;