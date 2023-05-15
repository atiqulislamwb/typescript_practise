//all route function here
import { createUser, getUser, getUserById } from "./user.service";
import { NextFunction, Request, Response } from "express";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;
  const user = await createUser(userData);
  res.status(200).json({ success: true, msg: "User Create Success" });
};
export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUser();
  res.status(200).json({ success: true, data: users });
};

export const getUserControllerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await getUserById(id);
  res.status(200).json({ success: true, data: user });
};
