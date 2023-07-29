import { Request, Response, NextFunction } from "express";

import {
  createOrderService,
  getOrderByIdService,
  getOrdersByUserIdService,
} from "../services/orders";
import Order from "../models/Order";

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

export const getOrdersByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  try {
    const orderList = await getOrdersByUserIdService(userId);
    res.status(200).json(orderList);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orderId = req.params.id;
  try {
    const order = await getOrderByIdService(orderId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
