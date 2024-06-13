import { Request, Response } from "express";
import mySql from "mysql";
import User, { IUser } from "../models/User";
import { Roles, UserStatus } from "../constants";
import { Op } from "sequelize";
import { generateToken } from "../utils/auth";
import jwt from "jsonwebtoken";

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

export const getTenantRequests = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      where: { user_status: UserStatus.Pending, role: Roles.Tenant },
    });

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch requests", error });
  }
};

export const getAdminRequests = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      where: {
        user_status: UserStatus.Pending,
        role: {
          [Op.ne]: Roles.Tenant,
        },
      },
    });

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch requests", error });
  }
};

export const deleteRequest = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.destroy({ where: { id } });

    return res.status(200).json({ message: "Request deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Failed to delete request", error });
  }
};

export const generateRegistrationLink = async (req: Request, res: Response) => {
  const { email, role } = req.body;
  const user_status = UserStatus.Pending;

  try {
    if (!email || !role) {
      return res
        .status(400)
        .json({ message: "Can not generate link without email and role." });
    }
    let user = (await User.findOne({ where: { email } })) as IUser;

    if (!user) {
      user = (await User.create({ email, role, user_status })) as IUser;
    }

    if (user.user_status === "REGISTERED") {
      return res.status(400).json({ message: "User already registered" });
    }

    const updatedUser = await User.update(
      { user_status: UserStatus.TokenGenerated, role: role },
      { where: { email } }
    );

    if (!updatedUser) {
      return res.status(400).json({ message: "Failed to update user" });
    }

    const jwtSecret = process.env.JWT_SECRET || "";

    const token = jwt.sign({ email, role }, jwtSecret, {
      expiresIn: "1h",
      });

    const registrationLink = `${process.env.BACKEND_BASE_URL}/auth/register?token=${token}`;
    res
      .status(200)
      .json({ message: "Link generated successfully", registrationLink });
  } catch (error) {
    return res.status(400).json({ message: "Failed to generate link", error });
  }
};
