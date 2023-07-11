import mongoose, { Document } from "mongoose";
import { ProductDocument, ProductSchema } from "./product";

export type OrderProduct = {
  title: string;
  description: string;
  price: number;
  material: string[];
  color: string;
  image: string;
  quantity: number;
};

export type OrderDocument = Document & {
  createdAt: Date;
  order: ProductDocument[];
  userId: string;
};

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: [ProductSchema],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export default mongoose.model<OrderDocument>("order", OrderSchema);
