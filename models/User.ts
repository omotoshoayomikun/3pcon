import { Schema, model, models, Document, Types } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
  eventId: Types.ObjectId;
}

const UserSchema = new Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    source: { type: String },
    eventId: { type: Schema.Types.ObjectId, ref: "Event" }
  },
  { timestamps: true }
);

// The ternary operator handles the Next.js hot-reloading model recompilation
const User = models.User || model<IUser>('User', UserSchema);

export default User;