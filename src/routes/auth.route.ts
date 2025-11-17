import express from "express";
import { login, register, getProfile } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
export default router;



