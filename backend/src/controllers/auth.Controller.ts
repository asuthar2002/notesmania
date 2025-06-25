import { Request, Response } from "express";
import { registerUserService, loginUserService, varifyTokenService } from "../services/auth.service";
import { sendError, sendSuccess } from "../utils/response";

export const registerUserController = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await registerUserService(req.body);
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
export const loginUserController = async (req: Request, res: Response): Promise<any> => {
    try {
        const loginResult = await loginUserService(req.body);
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
export const varifyTokenController = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.cookies.refreshToken;
        if (!token) {
            return sendError(res, 401, "No refresh token provided");
        }
        const varifyResponse = await varifyTokenService(token);
        if (!varifyResponse.success) {
            return sendError(res, 401, varifyResponse.message);
        }
        return sendSuccess(res, 200, "Token is valid", { valid: varifyResponse.data.valid });
    } catch (error) {
        console.error("Token Verification Error:", error);
        return sendError(res, 500, "Internal server error", error);
    }
}