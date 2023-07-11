import { OrderDocument } from "../models/order";


export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};
