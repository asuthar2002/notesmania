import { Router } from "express";
import { updateProfileController, getProfileController } from "../controllers/user.Controller";
const router = Router();

router.post("/update-profile", updateProfileController);
router.get("/profile", getProfileController);

export default router;