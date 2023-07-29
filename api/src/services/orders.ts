import Order, { OrderDocument } from "../models/Order";
import { NotFoundError } from "../helpers/apiError";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};

export const getOrdersByUserIdService = async (
  userId: string
): Promise<OrderDocument[]> => {
  const orderList = await Order.find({ userId: userId });
  if (orderList) {
    return orderList;
  } else {
    throw new NotFoundError(
      `Could not find order for user with id: ${userId}.`
    );
  }
};

export const getOrderByIdService = async (
  orderId: string
): Promise<OrderDocument> => {
  const order = await Order.findById(orderId);
  if (order) {
    return order;
  } else {
    throw new NotFoundError(`Could not find order with id: ${orderId}.`);
  }
};
