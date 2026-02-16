import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Event from "../../../../models/Event";

export async function GET() {
    try {
        await dbConnect();
        const events = await Event.find({}).sort({ date: 1 });
        return NextResponse.json({ success: true, data: events }, { status: 200 });
    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";
    
        return NextResponse.json( {success: false, message: errorMsg },{status: 500,});
      }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();

        console.log(body)

        if (!body.title || !body.date) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        const newEvent = await Event.create(body);
        return NextResponse.json({ success: true, data: newEvent }, { status: 200 });
    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";

        return NextResponse.json({ message: errorMsg }, { status: 500, });
    }
}