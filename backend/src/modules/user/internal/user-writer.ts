import userModel from "models/user";
import { userDetails } from "../types";

export default class userWriter{
    static async create(userData: userDetails) {
        const existingUser = await userModel.findOne({ email: userData.email});

        if (existingUser) {
            if (existingUser.status === status.PENDING) {
                await existingUser.save();
                const { otp, ...safeUser } = existingUser.toObject();
                return safeUser;
            } else {
                throw new Error("An account with this email already exists.");
            }
        }
        const createdUser = new userModel({
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            phoneNumber: userDetails.phoneNumber,
        });

        await createdUser.save();
        return createdUser;
    }
}