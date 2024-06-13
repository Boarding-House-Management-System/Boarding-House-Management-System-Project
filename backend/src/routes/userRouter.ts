import express from "express";
import { createUser, deleteRequest, generateRegistrationLink, getAdminRequests, getTenantRequests } from "../controllers/userController";

const router = express.Router();

router.post("/request", createUser);
router.get("/tenant-requests",getTenantRequests);
router.get("/admin-requests",getAdminRequests);
router.delete("/delete-request/:id",deleteRequest);
router.post("/generate-token",generateRegistrationLink);

export default router; 
