import Order, { OrderDocument } from "../models/order";
import { NotFoundError } from "../helpers/apiError";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};

export const getOrdersByIdService = async (
  userId: string
): Promise<OrderDocument[]> => {
  const orderList = await Order.find({ userId: userId }).populate({
    path: "userId",
  });
  if (orderList) {
    return orderList;
  } else {
    throw new NotFoundError(
      `Could not find order for user with id: ${userId}.`
    );
  }
};
