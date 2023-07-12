import Order, { OrderDocument } from "../models/order";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};

export const getAllOrdersService = async (): Promise<OrderDocument[]> => {
  return Order.find();
};