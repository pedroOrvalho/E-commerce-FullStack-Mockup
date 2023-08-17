import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  address: string;
  postal: string;
  city: string;
  isBanned: boolean;
};

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  address: {
    type: String,
  },
  postal: {
    type: String,
  },
  city: {
    type: String,
  },
  isBanned: {
    type: String,
    default: false,
  },
});

export default mongoose.model<UserDocument>("user", UserSchema);
