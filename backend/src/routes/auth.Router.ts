import { registerUser, loginUser } from "../controllers/auth.Controller";
import { loginRateLimiter, registerRateLimiter } from "../middlewares/rateLimit.middleware";
import { Router } from "express";
const router = Router();

router.post("/register", registerRateLimiter, registerUser);
router.get("/login", loginRateLimiter, loginUser)
export default router;