import userWriter from "../internal/user-writer";
import { userDetails } from "../types";

export default class userService {
    static async createUser(userData: userDetails) {
        try {
            const user = await userWriter.create(userData);
            return user;
        } catch (error) {
            throw new Error("Failed to create user");
        }
    }
}