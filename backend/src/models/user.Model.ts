import mongoose, { Schema, Document, Model } from "mongoose";
import type { IUser } from "../interfaces/interfaces";

export interface IUserModel extends IUser, Document { }

const userSchema = new Schema<IUserModel>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    university: { type: String, required: true },
    department: { type: String, required: true },
    year: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User: Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);
export default User;
