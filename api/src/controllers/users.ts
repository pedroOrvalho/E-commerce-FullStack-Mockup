import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/user";
import {
  createUserService,
  updateUserInfoService,
  deleteUserByIdService,
  findUserByEmailService,
} from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

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
    const newUser = await createUserService(userInformation);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const logInWithPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await findUserByEmailService(req.body.email);
    if (userData) {
      const token = jwt.sign(
        { email: userData.email, _id: userData._id },
        JWT_SECRET,
        { expiresIn: "30m" }
      );
      res.json({ userData, token });
    }
    res.status(403).json({
      message: "You don't have an account yet, please register first.",
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const userNewInfo = req.body;
  try {
    const user = await updateUserInfoService(userId, userNewInfo);
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
