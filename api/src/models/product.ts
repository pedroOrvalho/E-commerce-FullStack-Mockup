import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string[];
};

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: [String],
  },
  color: {
    type: String,
  },
  image: {
    type: [String],
    required: true,
  },
});

export default mongoose.model<ProductDocument>("products", ProductSchema);
