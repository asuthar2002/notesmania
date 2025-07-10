import { registerUserController, loginUserController, varifyTokenController } from "../controllers/auth.Controller";
import { loginRateLimiter, registerRateLimiter } from "../middlewares/rateLimit.middleware";
import { Router } from "express";
const router = Router();

router.post("/register", registerRateLimiter, registerUserController);
router.post("/login", loginUserController);
router.get("/verify-token", varifyTokenController);
export default router;