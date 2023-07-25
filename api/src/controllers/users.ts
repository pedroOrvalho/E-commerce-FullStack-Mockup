import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "../models/user";
import {
  createUserService,
  findUserByEmailService,
  updateUserInfoService,
  deleteUserByIdService,
  getUserByIdService,
} from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userInformation = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    const newUser = await createUserService(userInformation);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const logInWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await findUserByEmailService(req.body.email);
    if (userData) {
      const databaseHashedPassword = userData.password;
      const isCorrectPassword = await bcrypt.compare(
        req.body.password,
        databaseHashedPassword
      );

      if (!isCorrectPassword) {
        throw new UnauthorizedError("Password is incorrect.");
      }
      const token = jwt.sign(
        { email: userData.email, _id: userData._id },
        JWT_SECRET,
        {
          expiresIn: "30m",
        }
      );
      res.json({ userData, token });
    } else {
      res.status(403).json({
        message: "You don't have an account yet, please register first.",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  try {
    const user = await getUserByIdService(userId);
    res.status(200).json(user);
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
