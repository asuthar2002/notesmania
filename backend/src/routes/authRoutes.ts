import { Router } from "express";
const router: Router = Router();
import * as authController from "../controllers/auth.Controller";
router.post("/register", authController.registerUser)
router.get("/login", authController.loginUser)
export default router;