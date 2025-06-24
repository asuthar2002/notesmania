import { Types, Document } from "mongoose";

export interface IUser {
    firstName: string;
    lastName: string;
    university?: string;
    department?: string;
    year?: string;
    email: string;
    password: string;
    refreshToken?: string;
    isVerified?: boolean;
    isAdmin?: boolean;
}

export interface IUserRegisterInput extends IUser {
    confirmPassword: string;
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