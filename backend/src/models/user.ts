import mongoose from "mongoose";
import { UserRole } from "types";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    role: {
        type: String,
        enum: UserRole,
        default: UserRole.USER
    }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;