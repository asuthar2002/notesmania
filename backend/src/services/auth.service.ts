import bcrypt from "bcrypt";
import User from "../models/user.Model";
import { IUser } from "../interfaces/interfaces";
import { ApiErrorResponse, ApiSuccessResponse } from "../interfaces/interfaces";
export const registerNewUser = async (userData: IUser): Promise<ApiSuccessResponse<{ email: string }> | ApiErrorResponse> => {
    const { firstName, lastName, university, department, year, email, password, confirmPassword } = userData;
    try {
        if (!email || !password || !firstName || !lastName || !university || !department || !year || !confirmPassword) {
            return {
                success: false,
                message: "Please provide all required fields and ensure passwords match"
            };
        }
        if (password !== confirmPassword) {
            return {
                success: false,
                message: "Passwords do not match"
            };
        }
        const data = await User.findOne({ email })
        if (data) {
            return {
                success: false,
                message: "User already exists with this email"
            };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            university,
            department,
            year,
            email,
            password: hashedPassword
        })
        await newUser.save();
        return {
            success: true,
            message: "User registered successfully",
            data: {
                email: newUser.email
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
            success: false,
            message: "An unknown error occurred",
            error: String(error)
        };
    }
}