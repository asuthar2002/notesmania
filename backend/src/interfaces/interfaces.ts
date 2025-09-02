import { Types, Document } from "mongoose";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    refreshToken: string;
    phone?: string;
    location?: string;
    about?: string;
    universityName?: string;
    universityCourse?: string;
    universityCgpa?: string;
    year?: string;
    schoolName?: string;
    schoolCourse?: string;
    schoolPercentage?: string;
    isVerified?: boolean;
    isAdmin?: boolean;
}

export interface IUserRegisterInput extends IUser {
    confirmPassword?: string;
}

export interface IUserModel extends IUser, Document {
    _id: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ApiSuccessResponse<T> {
    success: true;
    message: string;
    data: T;
}

export interface ApiErrorResponse {
    success: false;
    message: string;
    error?: string;
}