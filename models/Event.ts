import { Schema, model, models, Document } from "mongoose";

// 1. Define a separate interface for the Speaker
interface ISpeaker {
    name: string;
    title: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
}

// 2. Define the TypeScript interface for the Event
export interface IEvent extends Document {
    title: string;
    date: Date;
    description: string;
    image: string;
    status: "upcoming" | "ongoing" | "completed";
    createdAt: Date;
    updatedAt: Date;
    speakers: ISpeaker[]; // Changed from object to ARRAY of ISpeaker
}

// 3. Define the Speaker Schema (as a real Mongoose Schema)
const SpeakerSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, default: "/images/solution/manx.png" },
    linkedin: String,
    twitter: String,
    facebook: String,
    instagram: String,
});

// 4. Define the Event Schema
const EventSchema = new Schema<IEvent>(
    {
        title: {
            type: String,
            required: [true, "Please provide an event title"],
            trim: true,
        },
        date: {
            type: Date,
            required: [true, "Please provide an event date and time"],
        },
        description: {
            type: String,
            required: [true, "Please provide an event description"],
        },
        image: {
            type: String,
            default: "/images/placeholder.png",
        },
        status: {
            type: String,
            enum: ["upcoming", "ongoing", "completed"],
            default: "upcoming",
        },
        // Mongoose will now correctly treat this as an array of the SpeakerSchema
        speakers: {type: [SpeakerSchema], dafault: []}, 
    },
    { timestamps: true }
);

const Event = models.Event || model<IEvent>("Event", EventSchema);

export default Event;