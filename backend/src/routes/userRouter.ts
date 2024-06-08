import express from "express";
import { createUser, getTenantRequests } from "../controllers/userController";

const router = express.Router();

router.post("/request", createUser);
router.get("/tenant-requests",getTenantRequests);

export default router; 
