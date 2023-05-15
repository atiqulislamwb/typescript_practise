//Database Query Here

import User from "./user.schema";
import IUser from "./user.interface";

export const createUser = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save(); //instance methods
  return user;
};

export const getUser = async () => {
  const users = await User.find({});
  return users;
};

export const getUserById = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ _id: payload });
  return user;
};
