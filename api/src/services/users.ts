import User, { UserDocument } from "../models/user";
import { NotFoundError } from "../helpers/apiError";

export const createUserService = async (
  user: UserDocument
): Promise<UserDocument> => {
  return user.save();
};

export const findUserByEmailService = async (
  userEmail: string
): Promise<UserDocument> => {
  const foundUser = await User.findOne({ email: userEmail });
  if (foundUser) {
    return foundUser;
  } else {
    throw new NotFoundError(
      `Could not find user with email in the database.`
    );
  }
};

export const updateUserInfoService = async (
  userId: string,
  userInfo: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(userId, userInfo, {
    new: true,
  });
  if (user) {
    return await user;
  } else {
    throw new NotFoundError(
      `Could not update user with id ${userId} from the database.`
    );
  }
};

export const deleteUserByIdService = async (
  userId: string
): Promise<UserDocument> => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (deletedUser) {
    return deletedUser;
  } else {
    throw new NotFoundError(
      `Could not delete user with id ${userId} from the database.ƒ`
    );
  }
};
