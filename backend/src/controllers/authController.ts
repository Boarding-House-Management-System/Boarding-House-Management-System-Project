import { constants } from "buffer";
import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Roles, UserStatus } from "../constants";
import User, { IUser } from "../models/User";
import Tenant, { ITenant } from "../models/Tenant";
import { generateToken } from "../utils/auth";
import bcrypt from "bcryptjs";

const registerUser = async (req: Request, res: Response) => {
  const { token } = req.query;
  const jwtSecret = process.env.JWT_SECRET || "";
  try {
    const decoded = jwt.verify(token as string, jwtSecret) as JwtPayload;
    if (!decoded) {
      return res.status(400).json({ message: "Invalid token" });
    }
    const { email, role } = decoded;
    if (role == Roles.Finance) {
    } else if (role === Roles.Owner) {
    } else if (role === Roles.Tenant) {
      const {
        full_name,
        password,
        room_id,
        last_payment_month,
        NIC,
        address,
        guardian_id,
        phone_no,
      } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const userExist = (await Tenant.findOne({
        where: { user_email: email },
      })) as ITenant;
      if (userExist) {
        return res.status(409).json({ message: "User already registered." });
      } else {
        const tenant = (await Tenant.create({
          full_name,
          password: hashedPassword,
          room_id,
          last_payment_month,
          NIC,
          address,
          guardian_id,
          phone_no,
          user_email: email,
        })) as ITenant;
        const user = await User.update(
          {
            user_status: UserStatus.Registered,
            password: hashedPassword,
            name: full_name,
          },
          { where: { email } }
        );
        if (tenant && user) {
          generateToken(res, { userEmail: email, role: role });
          res.status(201).json({
            message: "User registered successfully",
            user: tenant,
          });
        } else {
          return res.status(400).json({ message: "Failed to register user" });
        }
      }
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Failed to register user", error });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = (await User.findOne({ where: { email } })) as IUser;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateToken(res, { userEmail: email, role: user.role });
    return res.status(200).json({ message: "Logged in successfully", user: user});
  } catch (error) {
    return res.status(400).json({ message: "Failed to login", error });
  }
};

const logoutUser = (req: Request, res: Response) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully" });
    
};

export { registerUser, loginUser, logoutUser };
