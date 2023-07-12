import mongoose, { Document } from "mongoose";

type OrderProductDocument = Document & {
  title: string;
  description: string;
  price: number;
  material: string[];
  color: string;
  image: string;
  quantity: number;
};

const OrderProductSchema = new mongoose.Schema({
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
 },
 color: {
   type: String,
 },
 image: {
   type: String,
   required: true,
 },
 quantity: {
   type: Number, 
   required: true}
})

export type OrderDocument = Document & {
  createdAt: Date;
  productList: OrderProductDocument[];
  userId: string;
};

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  productList: [OrderProductSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export default mongoose.model<OrderDocument>("order", OrderSchema);
