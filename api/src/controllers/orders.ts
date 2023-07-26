import { Request, Response, NextFunction } from "express";

import { createOrderService, getOrdersByIdService } from "../services/orders";
import Order from "../models/order";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newOrder = new Order({
    userId: req.params.id,
    productList: req.body,
  });
  try {
    const order = await createOrderService(newOrder);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrdersById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  try {
    const orderList = await getOrdersByIdService(userId);
    res.status(200).json(orderList);
  } catch (error) {
    next(error);
  }
};
