import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../../models/Event";
import dbConnect from "../../../../../lib/dbConnect";

export async function PUT(
    request: NextRequest, 
    { params }: { params: Promise<{ id: string }> } // Define params as a Promise
) {
    try {
        await dbConnect();
        
        // 1. Unwrap the params Promise
        const { id } = await params; 
        console.log(id)
        
        const body = await request.json();

        // 2. Fix the Mongoose warning by using returnDocument: 'after'
        const updatedEvent = await Event.findByIdAndUpdate(
            id, 
            body, 
            { returnDocument: 'after', runValidators: true } 
        );

        if (!updatedEvent) {
            return NextResponse.json({ success: false, message: "Event not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedEvent }, { status: 200 });
    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";
        return NextResponse.json({ message: errorMsg }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest, 
    { params }: { params: Promise<{ id: string }> } // Define params as a Promise
) {
    try {
        await dbConnect();
        
        // 1. Unwrap the params Promise
        const { id } = await params;

        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return NextResponse.json({ success: false, message: "Event not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Deleted successfully" }, { status: 200 });
    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected error occurred";
        return NextResponse.json({ message: errorMsg }, { status: 500 });
    }
}

export async function GET(
    request: NextRequest, 
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();

        // Unwrap the params promise for Next.js 15
        const { id } = await params;

        const event = await Event.findById(id);

        if (!event) {
            return NextResponse.json(
                { success: false, message: "Event not found" }, 
                { status: 404 }
            );
        }

        return NextResponse.json({ 
            success: true, 
            data: event 
        }, { status: 200 });

    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
        return NextResponse.json(
            { success: false, message: errorMsg }, 
            { status: 500 }
        );
    }
}