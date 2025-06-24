import { registerUser } from "../controllers/auth.Controller";
import { Router } from "express";
const router = Router();

router.post("/register", registerUser);
export default router;