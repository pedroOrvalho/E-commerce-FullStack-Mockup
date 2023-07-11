import mongoose, { Document } from "mongoose";

export type ProductType = {
  title: string;
  description: string;
  price: number;
  material: string[];
  color: string;
  image: string;
};

export type ProductDocument = Document & ProductType;

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: [String],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ProductDocument>("products", ProductSchema);
