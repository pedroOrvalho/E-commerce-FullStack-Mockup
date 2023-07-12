import { Request, Response, NextFunction } from "express";

import { createOrderService } from "../services/orders";
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
    res.json(order);
  } catch (error) {
    next(error);
  }
};
