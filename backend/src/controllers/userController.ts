import { Request,Response } from "express";
import mySql from "mysql";
import User from '../models/User';
import { UserStatus } from "../constants";


export const createUser = async (req: Request, res: Response) => {
    const {  email, role } = req.body;
    const user_status = UserStatus.Pending;
    if (!email || !role) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
    //     if (results.length > 0) {
    //         return res.status(400).json({ message: "You have already requested" });
    //     } else {
    //         connection.query('INSERT INTO users SET ?', { email, role, user_status }, function (error, results, fields) {
    //         if (error) {
    //             return res.status(400).json({ message: "Failed to request" });
    //         }
    //         return res.status(201).json({ message: "Successfully requested" });
    //         });
    //     }

    // });
    try {
        const existingUser = await User.findOne({ where: { email } });
    
        if (existingUser) {
          return res.status(400).json({ message: 'You have already requested' });
        }
    
        const newUser = await User.create({ email, role , user_status});
    
        return res.status(201).json({ message: 'Requested successfully', user: newUser });
      } catch (error) {
        return res.status(400).json({ message: 'Failed to request', error });
      }

}
