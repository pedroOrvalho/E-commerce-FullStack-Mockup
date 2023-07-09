import { Request, Response } from "express";

import User from "../models/user";
import {
  createUserService,
  updateUserByIdService,
  deleteUserByIdService,
} from "../services/user";

export const createUser = async (req: Request, res: Response) => {
  const userInformation = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const user = await createUserService(userInformation);
  res.status(200).json(user);
};

export const updateUserInfoById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userNewInfo = req.body;
  try {
    const user = await updateUserByIdService(userId, userNewInfo);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Could not update user info with id: ${userId}.` });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    await deleteUserByIdService(userId);
    res.status(200).json()
  } catch (error) {
    console.log(error);
  }
};
