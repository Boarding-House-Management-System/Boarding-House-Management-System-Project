import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const registerUser = (req: Request, res: Response) => {
    const { token } = req.params;
    const jwtSecret = process.env.JWT_SECRET || "";
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    try {
        const { email, role } = decoded;
        console.log(email);
    } catch (error) {
        return res.status(400).json({ message: "Failed to register user", error });
    }
    
};

const authenticateUser = (req: Request, res: Response) => {};

const logoutUser = (req: Request, res: Response) => {};

export { registerUser, authenticateUser, logoutUser };