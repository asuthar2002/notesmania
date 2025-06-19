import { Request, Response } from "express";
import { registerNewUser } from "../services/auth.service";
import { sendError, sendSuccess } from "../utils/response";

export const registerUser = async (req: Request, res: Response) => {
    try {
        if (req.body.password !== req.body.confirmPassword) {
            return sendError(res, 400, "Passwords do not match");
        }
        const result = await registerNewUser(req.body);

        if (!result.success) {
            return sendError(res, 400, result.message);
        }

        return sendSuccess(res, 201, result.data, result.message);
    } catch (error) {
        console.error("Register Error:", error);
        return sendError(res, 500, "Internal server error", error);
    }
};
export const loginUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            return sendError(res, 400, "Required all fields");
        }
    } catch (error) {
    }
}