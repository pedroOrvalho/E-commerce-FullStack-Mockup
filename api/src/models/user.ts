import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  username: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserDocument>("user", UserSchema);
