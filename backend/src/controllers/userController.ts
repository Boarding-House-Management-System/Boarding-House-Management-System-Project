import { Request, Response } from "express";
import mySql from "mysql";
import User from "../models/User";
import { UserStatus } from "../constants";

export const createUser = async (req: Request, res: Response) => {
  const { email, name, role } = req.body;
  const user_status = UserStatus.Pending;
  if (!email || !role || !name) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "You have already requested" });
    }

    const newUser = await User.create({ email, name, role, user_status });

    return res
      .status(201)
      .json({ message: "Requested successfully", user: newUser });
  } catch (error) {
    return res.status(400).json({ message: "Failed to request", error });
  }
};
