import { Request, Response } from "express";
import { registerUserController, loginUserController } from "../services/auth.service";
import { sendError, sendSuccess } from "../utils/response";

export const registerUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await registerUserController(req.body);
        if (!result.success) {
            return sendError(res, 400, result.message);
        }
        res.cookie("refreshToken", result.data.token.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        }); // 7 days
        return sendSuccess(res, 201, result.message, {
            user: result.data.user,
            accessToken: result.data.token.accessToken
        });
    } catch (error) {
        console.error("Register Error:", error);
        return sendError(res, 500, "Internal server error", error);
    }
};
export const loginUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const loginResult = await loginUserController(req.body);
        if (!loginResult.success) {
            return sendError(res, 400, loginResult.message);
        }
        res.cookie("refreshToken", loginResult.data.token.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        return sendSuccess(res, 200, loginResult.message, {
            user: loginResult.data.user,
            accessToken: loginResult.data.token.accessToken
        });
    } catch (error) {
        console.error("Login Error:", error);
        return sendError(res, 500, "Internal server error", error);
    }
}