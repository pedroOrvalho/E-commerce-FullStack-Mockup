import mongoose from "mongoose";
import User, { UserDocument } from "../models/user";

export const createUserService = async (
  user: UserDocument
): Promise<UserDocument | undefined> => {
  try {
    return user.save();
  } catch (error) {
    console.log(error);
  }
};

export const updateUserByIdService = async (
  userId: string,
  userInfo: Partial<UserDocument>
): Promise<UserDocument | undefined> => {
  const user = await User.findByIdAndUpdate(userId, userInfo, {
    new: true,
  });
  try {
    if (user) {
      return await user;
    } else {
      console.log(
        `Could not update user with id ${userId} information in the database.`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserByIdService = async (
  userId: string
): Promise<UserDocument | undefined | null> => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
};
