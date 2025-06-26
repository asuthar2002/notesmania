import bcrypt from "bcrypt";
import User from "../models/user.Model";
import { ApiErrorResponse, ApiSuccessResponse, IUserRegisterInput } from "../interfaces/interfaces";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
export const registerUserService = async (userData: IUserRegisterInput): Promise<ApiSuccessResponse<{ user: { id: string; email: string; }; token: { accessToken: string; refreshToken: string } }> | ApiErrorResponse> => {
    const { firstName, lastName, email, password, confirmPassword } = userData;
    try {
        if (!email || !password || !firstName || !lastName || !confirmPassword) {
            return { success: false, message: "Invalid Credentials" };
        }
        if (password !== confirmPassword) {
            return { success: false, message: "Invalid Credentials" };
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return { success: false, message: "User already exists with this email" };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        const accessToken = generateAccessToken(newUser._id.toString());
        const refreshToken = generateRefreshToken(newUser._id.toString());

        newUser.refreshToken = refreshToken;
        await newUser.save();
        return {
            success: true,
            message: "User registered successfully",
            data: {
                user: { id: newUser._id.toString(), email: newUser.email },
                token: { accessToken, refreshToken }
            }
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: "An error occurred while registering the user",
                error: error.message
            };
        }
        return {
            success: false, message: "An unknown error occurred", error: String(error)
        };
    }
}
export const loginUserService = async (userData: any): Promise<ApiSuccessResponse<any> | ApiErrorResponse> => {
    try {
        const { email, password } = userData;
        if (!email || !password) {
            return {
                success: false, message: "Invalid credentials"
            };
        }
        const user = await User.findOne({ email });
        if (!user) {
            return {
                success: false, message: "Invalid credentials"
            };
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return {
                success: false, message: "Invalid credentials"
            };
        }
        const accessToken = generateAccessToken(user._id.toString());
        const refreshToken = generateRefreshToken(user._id.toString());
        user.refreshToken = refreshToken;
        await user.save();
        return {
            success: true,
            message: "Login successful",
            data: {
                user: { id: user._id.toString(), email: user.email },
                token: { accessToken, refreshToken }
            }
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false, message: "An error occurred while logging in", error: error.message
            };
        }
        return {
            success: false, message: "An unknown error occurred", error: String(error)
        };
    }
}
export const varifyTokenService = async (token: string): Promise<ApiSuccessResponse<{ valid: boolean }> | ApiErrorResponse> => {
    try {
        if (!token) {
            return { success: false, message: "No token provided" };
        }
        const user = await User.findOne({ refreshToken: token });
        if (!user) {
            return { success: false, message: "Invalid token" };
        }
        return {
            success: true, message: "Token is valid", data: { valid: true }
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false, message: "An error occurred while logging in", error: error.message
            };
        }
        return {
            success: false, message: "An unknown error occurred", error: String(error)
        };
    }
}