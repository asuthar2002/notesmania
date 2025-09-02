import mongoose, { Schema, Model } from "mongoose";
import { IUserModel } from "../interfaces/interfaces";

const userSchema = new Schema<IUserModel>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshToken: { type: String, default: null },
    phone: { type: String },
    location: { type: String },
    about: { type: String },
    universityName: { type: String },
    universityCourse: { type: String },
    universityCgpa: { type: String },
    year: { type: String },
    schoolName: { type: String },
    schoolCourse: { type: String },
    schoolPercentage: { type: String },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const User: Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);
export default User;
