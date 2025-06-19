import { Response } from "express";
import { ApiErrorResponse, ApiSuccessResponse } from "../interfaces/interfaces";
export const sendError = (res: Response, statusCode: number, message: string, error?: unknown): Response<ApiErrorResponse> => {
    return res.status(statusCode).json({
        success: false,
        message,
        error: error instanceof Error ? error.message : undefined,
    });
}
export const sendSuccess = <T>(res: Response, statusCode: number, message: string, data: T): Response<ApiSuccessResponse<T>> => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
}