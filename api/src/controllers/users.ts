import { Request, Response, NextFunction } from "express";

import User from "../models/user";
import {
  createUserService,
  updateUserByIdService,
  deleteUserByIdService,
} from "../services/users";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userInformation = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.email,
  });
  try {
    const user = await createUserService(userInformation);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserInfoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const userNewInfo = req.body;
  try {
    const user = await updateUserByIdService(userId, userNewInfo);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  try {
    await deleteUserByIdService(userId);
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
