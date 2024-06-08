import express from "express";
import { createUser } from "../controllers/userController";

const router = express.Router();

router.post("/request", createUser);

export default router; 
